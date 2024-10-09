import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42
];

export default function HomeScreen() {
  const renderItem = useCallback(
    ({ item }: {item: number}) => (
      <ThemedView style={styles.item}>
        <ThemedText>{item}</ThemedText>
      </ThemedView>
    ),
    []
  );
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type='title' style={styles.title}>FlashList RTL issue in Android</ThemedText>
      <ThemedText type='defaultSemiBold' style={styles.title}>Ensure the app is loaded in RTL mode</ThemedText>
      <FlashList data={data} renderItem={renderItem} numColumns={3} estimatedItemSize={42} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 36,
    padding: 8,
  },
  title: {
    textAlign: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  }
});
