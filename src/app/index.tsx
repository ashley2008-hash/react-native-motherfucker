import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <View className="ds-card w-full max-w-md items-center gap-3 p-6">
        <Text className="text-h2 text-text-primary">Lingua</Text>
        <Text className="text-body-medium text-center text-text-secondary">
          Your language learning journey starts here.
        </Text>
        <View className="ds-pill bg-primary px-5 py-3">
          <Text className="font-poppins-semibold text-white">Get started</Text>
        </View>
      </View>
    </View>
  );
}
