import { Alert, StatusBar } from 'react-native';
import React from 'react';

import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { startApp } from '../../../App';
import startMainTabs from '../../screens/MainTabs/startMainTabs';

const WithCTA = () => (
  <Onboarding
    showDone={false}
    onSkip={() =>  startApp()}
    pages={[
      {
        title: 'Buy with confidence',
        subtitle: 'Check whole history of your buing by proven item history!',
        backgroundColor: '#003c8f',
        image: (
          <Icon
            name="settings"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Say goodbye to contrafact goods',
        subtitle: 'Devery protocol guarantees that you will buy original item on second hand market',
        backgroundColor: '#003c8f',
        image: (
          <Icon
            name="settings"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Easy to buy, easy to sell',
        subtitle: 'Sell unused items with one swipe!',
        backgroundColor: '#003c8f',
        image: (
          <Icon name="settings"  size={100} color="white" />
        ),
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#003c8f' }}
            onPress={() => {
              startMainTabs();
            }}
          />
        ),
        backgroundColor: '#003c8f',
        image: (
          <Icon name="settings" size={100} color="white" />
        ),
      },
    ]}
  />
);

export default WithCTA;