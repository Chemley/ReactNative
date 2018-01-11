// this component will only be for styles. ReactNative doesn't have access to CSS like React does. So you often build components
// with that purpose in mind -- like the one below.

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
  );
};

// the object below is for styles. Container style is styles for the container. Syles are written similar to CSS minus the dashes.

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
