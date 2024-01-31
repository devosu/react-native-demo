import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, I am {props.name} and I am {props.age}!</Text>
    </View>
  );
};

const multipleProps = () => {
  return (
    <View>
      <Cat name="Bob" />
      <Cat name="Phil " />
      <Cat name="Jerry " />
    </View>
  );
};

export default multipleProps;