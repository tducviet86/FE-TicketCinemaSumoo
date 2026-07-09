import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './Auth.style';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/Auth/auth.thunk';
import { useNavigation } from '@react-navigation/native';
import { LoginPayload } from '../../entity/types.entity';
import { AppDispatch } from '../../store/store';
const AuthScreen = () => {
  const email = useRef<string>("");
  const password = useRef<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (email.current === "") {
      alert("Tên đăng nhập không được bỏ trống!")
      return;
    }
    if (password.current === "") {
      alert("Mật khảu không được bỏ trống!")
      return;
    }
    const formData: LoginPayload = {
      email: email.current,
      password: password.current
    }
    try {
      setLoading(true);
      console.log("data:",formData)
      await dispatch(loginThunk(formData)).unwrap();
      setLoading(false)
      navigation.replace("MainApp");
    } catch (error:any) {
      console.log("SERVER ERROR:", error.response?.data);
      alert(error || "Login failed");
      alert("email hoặc Password không chính xác!")
    } finally {
      setLoading(false);
    }
  }
  // ================= SUBMIT =================
  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      alert('Chưa làm API đăng ký 😄'); // 👉 sau này làm registerThunk
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View style={styles.card}>

          {/* HEADER */}
          <View style={styles.headerImage}>
            <Image
              source={require('../../assets/images/logo1.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <Text
              style={isLogin ? styles.activeTab : styles.inactiveTab}
              onPress={() => setIsLogin(true)}
            >
              Đăng Nhập
            </Text>

            <Text
              style={!isLogin ? styles.activeTab : styles.inactiveTab}
              onPress={() => setIsLogin(false)}
            >
              Đăng Ký
            </Text>
          </View>

          {!isLogin && (
            <>
              <Text style={styles.label}>Họ và tên</Text>
              <TextInput
                placeholder="Nhập tên"
                style={styles.input}
              />
            </>
          )}

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Nhập email"
            style={styles.input}
            onChangeText={(text) => email.current = text}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Nhập mật khẩu"
              style={styles.passwordInput}
              onChangeText={(text) => password.current = text}
              secureTextEntry
            />
            <Ionicons name="eye-off-outline" size={20} color="#aaa" />
          </View>

          {!isLogin && (
            <>
              <Text style={styles.label}>Nhập lại mật khẩu</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Nhập lại mật khẩu"
                  style={styles.passwordInput}
                  secureTextEntry
                />
                <Ionicons name="eye-off-outline" size={20} color="#aaa" />
              </View>
            </>
          )}

          {/* Forgot chỉ hiện ở login */}
          {isLogin && (
            <TouchableOpacity>
              <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          )}

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loading
                ? 'Đang xử lý...'
                : isLogin
                  ? 'Đăng Nhập'
                  : 'Đăng Ký'}
            </Text>
          </TouchableOpacity>

          {/* Switch text */}
          <Text style={styles.signupText}>
            {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
            <Text
              style={styles.signupLink}
              onPress={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Đăng ký' : 'Đăng nhập'}
            </Text>
          </Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;