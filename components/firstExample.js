import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const FirstExample = (params) => {

  return (
    <ScrollView>
      <Text>Some text</Text>
            <Text>Some text</Text>

      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>
      <Text>Some text</Text>

      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type here"
      />
    </ScrollView>
  );
};

export default FirstExample;