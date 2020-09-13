import React from 'react';
import {} from 'react-native';
// import from library
import {SafeAreaView} from 'react-native-safe-area-context';
// import from alias
import {TextView} from '@components';
import {withHotRedux} from '@hocs';
// localImport
import {use{{name}}Model} from './{{name}}.hooks';
import { {{camelCase name}}Slice} from './{{name}}.slice';
import { {{camelCase name}}Epic} from './{{name}}.epic';
import { {{name}}Props} from './types';
import {styles} from './{{name}}.style';

const _{{name}}: React.FC< {{name}}Props> = (props) => {
  const {} = props;
  const {} = use{{name}}Model();
 

  return (
    <SafeAreaView style={[styles.container]}>
      <TextView/>
    </SafeAreaView>
  );
};

export const {{name}} = withHotRedux(
  {{camelCase name}}Slice.name,
  {{camelCase name}}Slice.reducer,
  {{camelCase name}}Epic,
)(_{{name}});
