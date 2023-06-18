import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login';
import Materiel from '../materiel';
import InsertionM from '../InsertionM';
import User from '../user';
import Departement from '../departement';
import Types from '../types';
import Affectation from '../affectation';
import InsertionU from '../InsertionU';
import InsertionD from '../InsertionD';
import InsertionT from '../InsertionT';
import InsertionA from '../InsertionA';
import AffichageM from '../affichageM';
import AffichageU from '../affichageU';
import AffichageD from '../affichageD';
import AffichageT from '../affichageT';
import AffichageA from '../affichageA';
import Modification_matriel from '../ModificationM';
import Modification_User from '../ModificationU';
import Modification_departement from '../ModificationD';
import Modification_Types from '../ModificationT';
import Modification_Affetation from '../ModificationA';
import RechercheM from '../RechercheM';
import RechercheU from '../RechercheU';
import RechercheT from '../RechercheT';
import RechercheD from '../RechercheD';
import RechercheA from '../RechercheA';
import StatisticsM from '../StatisticM';
import StatisticsU from '../StatisticU';
import StatisticsD from '../StatisticD';
import StatisticsT from '../StatisticT';
import StatisticsA from '../StatisticA';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="main" component={Materiel} />
    <Stack.Screen name="departement" component={Departement} />
    <Stack.Screen name="types" component={Types} />
    <Stack.Screen name="User" component={User} />
    <Stack.Screen name="affectation" component={Affectation} />
    <Stack.Screen name="Insertion-materiel" component={InsertionM} />
    <Stack.Screen name="Insertion-user" component={InsertionU} />
    <Stack.Screen name="Insertion-departement" component={InsertionD} />
    <Stack.Screen name="Insertion-types" component={InsertionT} />
    <Stack.Screen name="Insertion-affectation" component={InsertionA} />
    <Stack.Screen name="Affichage-materiel" component={AffichageM} />
    <Stack.Screen name="Affichage-user" component={AffichageU} />
    <Stack.Screen name="Affichage-departement" component={AffichageD} />
    <Stack.Screen name="Affichage-types" component={AffichageT} />
    <Stack.Screen name="Affichage-affectation" component={AffichageA} />
    <Stack.Screen name="Recherche-materiel" component={RechercheM} />
    <Stack.Screen name="Recherche-user" component={RechercheU} />
    <Stack.Screen name="Recherche-departement" component={RechercheD} />
    <Stack.Screen name="Recherche-affectation" component={RechercheA} />
    <Stack.Screen name="Recherche-types" component={RechercheT} />
    <Stack.Screen name="Modifiation-materiel" component={Modification_matriel} />
    <Stack.Screen name="Modifiation-user" component={Modification_User} />
    <Stack.Screen name="Modification-departement" component={Modification_departement} />
    <Stack.Screen name="Modification-types" component={Modification_Types} />
    <Stack.Screen name="Modification-affectation" component={Modification_Affetation} />
    <Stack.Screen name="Statistic-materiel" component={StatisticsM} />
    <Stack.Screen name="Statistic-user" component={StatisticsU} />
    <Stack.Screen name="Statistic-departement" component={StatisticsD} />
    <Stack.Screen name="Statistic-types" component={StatisticsT} />
    <Stack.Screen name="Statistic-affectation" component={StatisticsA} />
  
    
    
  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppStack;