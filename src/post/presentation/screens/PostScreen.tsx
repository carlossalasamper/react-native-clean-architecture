import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
} from 'src/core/presentation/store/hooks';
import {postThunks} from '../store/postSlice';
import {RootStackScreenProps} from 'src/core/presentation/navigation/types';
import {useI18n} from 'src/core/presentation/hooks/useI18n';

const PostScreen = ({route}: RootStackScreenProps<'Post'>) => {
  const {id} = route.params;
  const i18n = useI18n();
  const dispatch = useAppDispatch();
  const {currentPost, isLoading} = useAppSelector(state => state.post);

  useEffect(() => {
    dispatch(postThunks.findPostThunk(id));
  }, [dispatch, id]);

  return isLoading ? (
    <Text>{i18n.t('post.screens.Post.loading')}</Text>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{currentPost?.title}</Text>
      <Text style={styles.body}>{currentPost?.body}</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});
