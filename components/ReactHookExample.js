import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const ReactHook = props => {
  const [isHappy, setIsHappy] = useState(false);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHappy ? 'happy' : 'dissatisfied'}!
      </Text>
      <Button
        onPress={() => {
          setIsHappy(true);
        }}
        disabled={isHappy}
        title={!isHappy ? 'Click the button!' : 'Thank you!'}
      />
    </View>
  );
};

const ReactHookExample = () => {
  return (
    <>
      <ReactHook name="Bob " />
      <ReactHook name="Phil " />
    </>
  );
};

export default ReactHookExample;