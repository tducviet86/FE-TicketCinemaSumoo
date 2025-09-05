import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  Image,
  Modal,
  Platform,
} from "react-native";
import { LatLng, Theater } from "../../entity/movie.entity";
import { THEATERS } from "../../components/data/cinema.mock";
import { useNavigation } from "@react-navigation/native";
import styles from "./ticket.style";

const palette = {
  bg: "#F7F7FA",
  card: "#FFFFFF",
  text: "#111827",
  textDim: "#6B7280",
  line: "#E5E7EB",
  accent: "#FF2D55",
  accent2: "#2563EB",
  pill: "#F3F4F6",
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
const haversineKm = (a: LatLng, b: LatLng): number => {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

type LocationState =
  | { status: "idle" | "requesting"; coords: null }
  | { status: "granted"; coords: LatLng }
  | { status: "denied" | "error"; coords: null };

const useUserLocation = () => {
  const [loc, setLoc] = useState<LocationState>({
    status: "idle",
    coords: null,
  });

  const request = () => {
    try {
      setLoc({ status: "requesting", coords: null });
      const geo = (navigator as any)?.geolocation;
      if (!geo) return setLoc({ status: "error", coords: null });
      geo.getCurrentPosition(
        (pos: any) => {
          const { latitude, longitude } = pos?.coords || {};
          if (typeof latitude === "number" && typeof longitude === "number") {
            setLoc({
              status: "granted",
              coords: { lat: latitude, lon: longitude },
            });
          } else setLoc({ status: "error", coords: null });
        },
        () => setLoc({ status: "denied", coords: null }),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    } catch {
      setLoc({ status: "error", coords: null });
    }
  };

  return { loc, request };
};

/* =============== UI atoms =============== */
const SectionHeader = ({
  title,
  rightAction,
}: {
  title: string;
  rightAction?: React.ReactNode;
}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {rightAction ? <View>{rightAction}</View> : null}
  </View>
);

const CitySelectorModal = ({
  visible,
  cities,
  selectedCity,
  onSelect,
  onClose,
}: {
  visible: boolean;
  cities: string[];
  selectedCity: string | null;
  onSelect: (city: string | null) => void;
  onClose: () => void;
}) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <Pressable style={styles.modalOverlay} onPress={onClose}>
      <View />
    </Pressable>
    <View style={styles.modalCard}>
      <Text style={styles.modalTitle}>Chọn khu vực</Text>
      <ScrollView contentContainerStyle={{ paddingVertical: 8 }}>
        <Pressable
          onPress={() => {
            onSelect(null);
            onClose();
          }}
          style={[
            styles.cityItem,
            selectedCity === null && styles.cityItemActive,
          ]}
        >
          <Text
            style={[
              styles.cityText,
              selectedCity === null && styles.cityTextActive,
            ]}
          >
            Tất cả Việt Nam
          </Text>
        </Pressable>
        {cities.map((c) => {
          const active = selectedCity === c;
          return (
            <Pressable
              key={c}
              onPress={() => {
                onSelect(c);
                onClose();
              }}
              style={[styles.cityItem, active && styles.cityItemActive]}
            >
              <Text style={[styles.cityText, active && styles.cityTextActive]}>
                {c}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <Pressable onPress={onClose} style={styles.modalCloseBtn}>
        <Text style={styles.modalCloseText}>Đóng</Text>
      </Pressable>
    </View>
  </Modal>
);

const HeroHeader = ({
  selectedCity,
  onSelectCityPress,
  canAskLocation,
  onAskLocation,
}: {
  selectedCity: string | null;
  onSelectCityPress: () => void;
  canAskLocation: boolean;
  onAskLocation: () => void;
}) => (
  <View style={styles.hero}>
    <View>
      <Text style={styles.brandMini}>WELCOME TO</Text>
      <Text style={styles.brand}>Sumoo Cinema</Text>
      <Text style={styles.brandSub}>Rạp chiếu phim của bạn · Việt Nam</Text>
    </View>
    <View style={styles.heroRow}>
      <Pressable style={styles.heroPicker} onPress={onSelectCityPress}>
        <Text style={styles.heroPickerText}>
          {selectedCity ? `Khu vực: ${selectedCity}` : "Chọn khu vực"}
        </Text>
        <Text style={styles.heroPickerIcon}>▾</Text>
      </Pressable>
      {canAskLocation && (
        <Pressable
          style={[
            styles.heroPicker,
            { borderColor: palette.accent2, backgroundColor: "#EEF2FF" },
          ]}
          onPress={onAskLocation}
        >
          <Text style={[styles.heroPickerText, { color: palette.accent2 }]}>
            Bật định vị
          </Text>
        </Pressable>
      )}
    </View>
  </View>
);

const TheaterCard = ({
  theater,
  userCoords,
  onPress,
}: {
  theater: Theater;
  userCoords: LatLng | null;
  onPress: (t: Theater) => void;
}) => {
  const km = userCoords ? haversineKm(userCoords, theater.coords) : null;
  const kmText = km !== null ? `${km.toFixed(km < 10 ? 1 : 0)} km` : "— km";
  return (
    <Pressable
      onPress={() => onPress(theater)}
      style={({ pressed }) => [
        styles.theaterCard,
        pressed && { opacity: 0.96 },
      ]}
    >
      <Image source={{ uri: theater.imageUrl }} style={styles.theaterImage} />
      <View style={styles.theaterBody}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.theaterName}>
            {theater.name}
          </Text>
          <Text numberOfLines={1} style={styles.theaterAddr}>
            {theater.address} · {theater.city}
          </Text>
          {!!theater.amenities?.length && (
            <View style={styles.amenityRow}>
              {theater.amenities!.slice(0, 4).map((a) => (
                <View key={a} style={styles.amenityChip}>
                  <Text style={styles.amenityText}>{a}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={styles.distanceBox}>
          <Text style={styles.distanceIcon}>📍</Text>
          <Text style={styles.distanceText}>{kmText}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const TheatersScreen = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showCityModal, setShowCityModal] = useState(false);
  const navigation = useNavigation<any>();
  const cities = useMemo(
    () =>
      Array.from(new Set(THEATERS.map((t) => t.city))).sort((a, b) =>
        a.localeCompare(b, "vi")
      ),
    []
  );

  const { loc, request } = useUserLocation();
  useEffect(() => {
    if (Platform.OS === "android" && loc.status === "idle") {
      // request(); // bật nếu muốn tự hỏi quyền trên Android
    }
  }, [loc.status]);

  const userCoords = loc.status === "granted" ? loc.coords : null;

  const filtered = useMemo(
    () =>
      selectedCity ? THEATERS.filter((t) => t.city === selectedCity) : THEATERS,
    [selectedCity]
  );

  const sorted = useMemo(() => {
    if (!userCoords) return filtered;
    return [...filtered].sort(
      (a, b) =>
        haversineKm(userCoords, a.coords) - haversineKm(userCoords, b.coords)
    );
  }, [filtered, userCoords]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeroHeader
        selectedCity={selectedCity}
        onSelectCityPress={() => setShowCityModal(true)}
        canAskLocation={loc.status !== "granted"}
        onAskLocation={request}
      />

      <FlatList
        data={sorted}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TheaterCard
            theater={item}
            userCoords={userCoords}
            onPress={(t) =>
              navigation.navigate('TicketStack', {
                screen: 'BoxOffice',
                params: { theaterId: t.id },
              })
            }
          />
        )}
        ListHeaderComponent={
          <SectionHeader
            title={selectedCity ? `Rạp tại ${selectedCity}` : "Tất cả rạp"}
            rightAction={
              <Text style={styles.counterText}>{sorted.length} rạp</Text>
            }
          />
        }
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />

      <CitySelectorModal
        visible={showCityModal}
        cities={cities}
        selectedCity={selectedCity}
        onSelect={(city) => setSelectedCity(city)}
        onClose={() => setShowCityModal(false)}
      />
    </SafeAreaView>
  );
};

export default TheatersScreen;
