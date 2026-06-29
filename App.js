import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import NewVisitor from './views/NewVisitor';
import EditVisitor from './views/Members.js';
import Login from './views/Login';
import { useState } from 'react';
import DetailsVisitor from "./views/DetailsVisitor.js"
import CreateAnomalia from './views/CreateAnomalia.js';
import Anomalias from './views/Anomalias.js';
import CreateCounter from './views/CreateCounter.js';
import DetailsAnomalia from './views/DetailsAnomalia.js';
import DetailsMember from './views/DetailsMember.js';
import Members from './views/Members.js';
import NewMembers from './views/NewMembers.js';
import Visitors from './views/Visitors.js';
import ReportsMenu from './views/ReportsMenu.js';
import Consolida from './views/Consolida.js';
import RutCrecim from './views/RutCrecim.js';
import DetaNue from './views/DetaNue.js';


const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(false)


  return (
    <NavigationContainer>
      <Stack.Navigator> 
             
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'IVBCCNS' }} />

        <Stack.Screen 
          name="Nuevo Visitante" 
          component={NewVisitor}
          options={{ title: 'Consolidación' }}  />
        
        <Stack.Screen
          name= "Visitantes"
          component={Visitors}
          options={{ title: 'Consolidación' }} />

        <Stack.Screen
          name= "Detalle de Visitante"
          component={DetailsVisitor} 
          options={{ title: 'Consolidación' }}
          />

        <Stack.Screen
          name= "Miembros"
          component={Members} 
          options={{ title: 'IVBCCNS' }}
          />
        
        <Stack.Screen
          name= "Detalles Miembro"
          component={DetailsMember} 
          options={{ title: 'IVBCCNS' }}
          />

        <Stack.Screen
          name= "Nuevo Miembro" 
          component={NewMembers} 
          options={{ title: 'IVBCCNS' }}
          />

        <Stack.Screen
          name= "Detal Nuevo"
          component={DetaNue} 
          options={{ title: 'IVBCCNS' }}
          />
             

        <Stack.Screen
          name= "Creación de Anomalia"
          component={CreateAnomalia} 
          options={{ title: 'Logística' }}
          />
        
        <Stack.Screen
          name= "Anomalias"
          component={Anomalias}
          options={{ title: 'Logísitica' }} />
        
        <Stack.Screen
          name= "Detalle de Anomalía"
          component={DetailsAnomalia} 
          options={{ title: 'Logísitica' }}
          />

        <Stack.Screen
          name= "Número de asistentes"
          component={CreateCounter} 
          options={{ title: 'Servidores' }}
          />
          
        <Stack.Screen
          name= "Reportes"
          component={ReportsMenu} 
          options={{ title: 'IVBCCNS' }}
          />
        
        <Stack.Screen
          name= "Consolidación"
          component={Consolida} 
          options={{ title: 'IVBCCNS' }}
          />

        <Stack.Screen
          name= "Ruta de Crecimiento"
          component ={RutCrecim} 
          options={{ title: 'Consolidación' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Julio cambia los title de Iglesia a Departamento Encargado
// we need to implement this:   
/**<Stack.Navigator>
 * esto es lo que va arriba
 *         <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Iglesia Valle de Bendición' }} />



        {  user? (
          <Stack.Screen name="Home">
            {props => <Homescreen {...props} extraData={user} />}
          </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
      </Stack.Navigator>   */

