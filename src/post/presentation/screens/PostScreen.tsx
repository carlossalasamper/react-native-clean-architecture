import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootStackScreenProps } from "src/core/presentation/navigation/types";
import { useI18n } from "src/core/presentation/hooks/useI18n";
import { withProviders } from "src/core/presentation/utils/withProviders";
import { FindPostStoreProvider } from "../stores/FindPostStore/FindPostStoreProvider";
import { useFindPostStore } from "../stores/FindPostStore/useFindPostStore";
import { observer } from "mobx-react";

const PostScreen = observer(({ route }: RootStackScreenProps<"Post">) => {
  const { id } = route.params;
  const i18n = useI18n();
  const findPostStore = useFindPostStore();
  const { post, isLoading } = findPostStore;

  useEffect(() => {
    findPostStore.findPost(id);
  }, [findPostStore, id]);

  return isLoading ? (
    <Text>{i18n.t("post.screens.Post.loading")}</Text>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text style={styles.body}>{post?.body}</Text>
    </View>
  );
});

export default withProviders(FindPostStoreProvider)(PostScreen);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});
