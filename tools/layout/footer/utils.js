import { memo, useCallback, useMemo, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { lightSeaGreen } from "tools/styles/colors";

let putProps;

export function useProps() {
  return { putProps };
}
export function useStore() {
  const { create } = useMemo(() => StyleSheet, []);
  const [props, setProps] = useState({
    label: "Don't have an account",
    link: "Sign Up here",
  });

  useMemo(() => (putProps = setProps), []);

  return {
    styles: useMemo(
      () => ({
        ...create({
          footerStyles: {
            flex: 1,
            justifyContent: "center",
          },
          socialsStyles: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 100,
            paddingTop: 5,
          },
        }),
        textStyles: create({
          containerStyles: {
            color: "white",
            textAlign: "center",
            paddingTop: 18,
            paddingBottom: 9,
            fontFamily: "SFProDisplayRegular",
          },
          innerStyles: {
            color: lightSeaGreen(),
          },
        }),
      }),
      [create]
    ),
    logos: useMemo(() => ["facebook", "google", "apple"], []),
    props,
    onPress: useCallback((link, onNavigate) => {
      if (link.match("Sign Up")) {
        setProps((old) => ({
          ...old,
          label: "Already have an account",
          link: "Login here",
        }));
        onNavigate("SignUp");
        return;
      }
      setProps((old) => ({
        ...old,
        label: "Don't have an account",
        link: "Sign Up here",
      }));
      onNavigate("Login");
    }, []),
    View,
    Text,
    FontAwesome,
    Google: useMemo(() => {
      function useGoogle({ size }) {
        return (
          <Svg
            height={size}
            viewBox="0 0 512 512"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M507.879 208.612a4.121 4.121 0 014.121 4.121V256c0 16.194-1.504 32.028-4.389 47.388-22.317 119.309-127.427 209.474-253.416 208.605C112.826 511.019-.312 396.794.001 255.423.312 114.306 114.81 0 256 0c69.173 0 131.935 27.442 178.014 72.018 1.664 1.609 1.707 4.261.07 5.897l-61.211 61.211a4.108 4.108 0 01-5.737.08c-28.921-27.529-68.051-44.43-111.136-44.43-88.971 0-160.616 71.136-161.22 160.105-.607 89.553 71.809 162.342 161.22 162.342 72.545 0 133.903-47.924 154.136-113.835H260.121a4.121 4.121 0 01-4.121-4.121v-86.535a4.121 4.121 0 014.121-4.121h247.758z"
              fill="#2196f3"
            />
            <Path
              d="M507.879 208.612h-30.905a4.121 4.121 0 014.121 4.121V256c0 16.194-1.504 32.028-4.389 47.388-21.291 113.822-117.936 201.117-236.175 208.15 4.524.267 9.078.423 13.664.455 125.99.869 231.099-89.297 253.416-208.605A256.485 256.485 0 00512 256v-43.268a4.12 4.12 0 00-4.121-4.12z"
              fill="#1e88e5"
            />
            <Path
              d="M109.56 188.482l-77.748-56.176C75.43 53.415 159.482 0 256 0c69.173 0 131.935 27.442 178.014 72.018 1.664 1.609 1.707 4.261.07 5.897l-61.211 61.211c-1.573 1.573-4.119 1.622-5.73.088C338.222 111.68 299.089 94.777 256 94.777c-64.932 0-120.902 38.384-146.44 93.705z"
              fill="#f44336"
            />
            <Path
              d="M87.115 172.265l22.445 16.217c23.31-50.494 71.978-86.86 129.668-92.825.434-.047.851-.104 1.293-.146a163.167 163.167 0 00-15.426-.734c-58.657 0-109.777 30.923-137.98 77.488zM403.109 72.018c1.664 1.609 1.707 4.261.07 5.898l-49.683 49.683c4.76 3.62 9.316 7.492 13.64 11.608a4.108 4.108 0 005.737-.08l61.211-61.211c1.637-1.637 1.593-4.288-.07-5.898C387.935 27.442 325.173 0 256 0c-5.191 0-10.341.173-15.455.478 63.04 3.755 119.941 30.308 162.564 71.54z"
              fill="#e53935"
            />
            <Path
              d="M443.792 429.977C397.042 480.425 330.204 512 256 512c-100.226 0-186.998-57.597-229.02-141.506l79.375-54.394C130.174 375.367 188.204 417.223 256 417.223c42.546 0 81.24-16.483 110.044-43.412z"
              fill="#4caf50"
            />
            <Path
              d="M106.356 316.101L82.95 332.14c27.185 50.644 80.644 85.083 142.145 85.083 5.201 0 10.342-.255 15.417-.736-61.049-5.82-112.174-45.687-134.156-100.386zM256 512c74.204 0 141.042-31.575 187.792-82.023l-19.043-13.757c-43.896 54.63-109.746 90.871-184.163 95.314 5.1.304 10.238.466 15.414.466z"
              fill="#43a047"
            />
            <Path
              d="M94.777 256c0 21.242 4.11 41.527 11.579 60.101L26.98 370.494C9.715 336.045 0 297.156 0 256c0-44.864 11.538-87.03 31.812-123.694l77.748 56.176c-9.488 20.531-14.783 43.412-14.783 67.518z"
              fill="#ffc107"
            />
            <Path
              d="M82.95 332.14l23.406-16.039C98.887 297.527 94.777 277.242 94.777 256c0-24.106 5.295-46.987 14.783-67.518l-22.445-16.217c-14.575 24.065-23.034 52.304-23.24 82.617-.19 27.954 6.737 54.275 19.075 77.258z"
              fill="#ffb300"
            />
          </Svg>
        );
      }
      return memo(useGoogle);
    }, []),
    Logo: useMemo(() => {
      function useLogo({ children }) {
        const { containerStyles } = useMemo(
          () =>
            create({
              containerStyles: {
                backgroundColor: "white",
                borderRadius: 22,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              },
            }),
          []
        );

        return <View style={containerStyles}>{children}</View>;
      }
      return memo(useLogo);
    }, [create]),
  };
}
