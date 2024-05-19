import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '../navigation/types';
import {useI18n} from '../hooks/useI18n';
import useGlobalStyle from '../hooks/useGlobalStyle';
import ICAchievement from 'src/core/components/icons/ICAchievement';

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  const i18n = useI18n();
  const styleHook = useGlobalStyle();

  return (
    <View>
      <Text style={[styles.title, styleHook.txtWord]}>
        {i18n.t('core.errors.screenNotFound')}
      </Text>
      <TouchableOpacity onPress={() => navigation.replace('Posts')}>
        <Text>{i18n.t('core.screens.NotFound.goHome')}</Text>
      </TouchableOpacity>
      <ICAchievement width={100} height={100} color={'red'} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
