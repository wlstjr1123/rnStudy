import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import { GRAY } from '../colors';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data, setIsBottom }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      onScroll={({
        nativeEvent: { contentOffset, layoutMeasurement, contentSize },
      }) => {
        const distance =
          contentSize.height - (contentOffset.y + layoutMeasurement.height);
        setIsBottom(!(distance > 20 || contentOffset.y === 0));
      }}
    />
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  setIsBottom: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
