import {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
} from 'src/core/presentation/store/hooks';
import {postThunks} from '../store/postSlice';
import {useI18n} from 'src/core/presentation/hooks/useI18n';
import PostItem from '../components/PostItem';

export default function PostsScreen() {
  const i18n = useI18n();
  const dispatch = useAppDispatch();
  const {items, isLoading} = useAppSelector(state => state.post);

  useEffect(() => {
    dispatch(postThunks.getPostsThunk());
  }, [dispatch]);

  return (
    <View>
      {isLoading ? (
        <Text>{i18n.t('post.screens.Posts.loading')}</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={({item}) => <PostItem post={item} />}
        />
      )}
    </View>
  );
}
