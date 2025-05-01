import { View } from "react-native";
import AuthContent from "../componants/AuthForm/AuthCon";
import { handleLogin } from "../http/http";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/loginSlice";
import { useSelector } from "react-redux";

function Login({ navigation }) {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.loginRed.data);

  async function handleLoginRequest({ email, password }) {
    const response = await handleLogin(email, password);
    const userId =response[0].id
    if (response) {
      dispatch(loginAction(userId));
    }
  }

  return (
    <View>
      <AuthContent isLogin onAuthenticate={handleLoginRequest} />
    </View>
  );
}

export default Login;
