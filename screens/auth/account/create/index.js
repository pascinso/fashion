import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createRef } from "react";
import { Button, Input, Layout } from "components";
import validateEmail from "utils/validateEmail";
import validatePassword from "utils/validatePassword";
import styleName from "./style.module.scss";

const input = {};
const refs = [createRef(), createRef()];
const texts = [
  { style: "title", label: "Create account" },
  { style: "body", label: "Let's know your name, email and password" },
];
const inputs = [
  {
    placeholder: "Enter your email",
    keyboardType: "email-address",
    textContentType: "emailAddress",
    icon: "mail-outline",
    returnKeyType: "next",
    onSubmitEditing() {
      refs[0].current?.focus();
    },
    onValidate: validateEmail,
  },
  {
    placeholder: "Enter your password",
    textContentType: "password",
    icon: "lock-outline",
    returnKeyType: "next",
    ref: refs[0],
    onSubmitEditing() {
      refs[1].current?.focus();
    },
    onValidate: validatePassword,
  },
  {
    placeholder: "Confirm your password",
    textContentType: "newPassword",
    icon: "lock-outline",
    returnKeyType: "join",
    ref: refs[1],
    onValidate(oldPassword) {
      if (validatePassword(oldPassword) && oldPassword === input?.password)
        return true;

      return false;
    },
    onSubmitEditing() {
      Layout.onDismissKeyboard();
    },
  },
];
const onNavigate = (navigate = () => {}) => navigate("Dashboard");
const onChangeText = (key, value) => (input[key] = value);
export default function Create() {
  const { navigate } = useNavigation();

  return (
    <>
      {texts.map(({ label, style }) => (
        <Text key={label} style={styleName[style]}>
          {label}
        </Text>
      ))}
      {inputs.map(
        ({
          placeholder,
          ref,
          icon,
          keyboardType,
          returnKeyType,
          textContentType,
          onValidate,
          onSubmitEditing,
        }) => (
          <Input
            key={placeholder}
            ref={ref}
            icon={icon}
            placeholder={placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            textContentType={textContentType}
            onSubmitEditing={onSubmitEditing}
            onValidate={onValidate}
            onChangeText={onChangeText}
          />
        )
      )}

      <Button
        label="Create your account"
        variant="primary"
        styleButton={styleName.button}
        onPress={onNavigate.bind(null, navigate)}
      />
    </>
  );
}
