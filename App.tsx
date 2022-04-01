import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import profileImage from './assets/profile.png'
import { useState } from 'react';
export default function App() {
  const [tabs, setTabs] = useState(true)
  const [name, setName] = useState('')
  const [passWord, setPassWord] = useState('')

  const handleAlterTypesTabs = (type: string) => {
    type === 'logar' ? setTabs(true) : setTabs(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        // Background Linear Gradient
        colors={['#7A28CB', '#03F7EB']}
        style={styles.background}
      />
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => handleAlterTypesTabs('logar')}
          style={styles.buttonTabs}>
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAlterTypesTabs('cadastrar')}
          style={styles.buttonTabs}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.constinerLogin}>
        {tabs ? 
          <> 
            <Image source={profileImage} style={styles.imgProfile} />
            <TextInput placeholderTextColor='rgba(122, 40, 203, 0.5)' placeholder="Nome" style={styles.input} onChangeText={setName} value={name} />
            <TextInput placeholderTextColor='rgba(122, 40, 203, 0.5)' placeholder="Senha" style={styles.inputPassword} onChangeText={setPassWord} value={passWord} />
            <TouchableOpacity
              onPress={() => alert('Hello, world!')}
              style={styles.buttonSubmit}>
              <Text style={styles.textButton}>Logar</Text>
            </TouchableOpacity>
          </>

        :

          <> 
            <Image source={profileImage} style={styles.imgProfile} />
            <View style={styles.containerCadastrar}>
              <TextInput placeholderTextColor='rgba(122, 40, 203, 0.5)' placeholder="Email" style={styles.inputEmail} onChangeText={setName} value={name} />
              <TextInput placeholderTextColor='rgba(122, 40, 203, 0.5)' placeholder="Nome" style={styles.input} onChangeText={setName} value={name} />
              <TextInput placeholderTextColor='rgba(122, 40, 203, 0.5)' placeholder="Senha" style={styles.inputPassword} onChangeText={setName} value={name} />
            </View>
            <TouchableOpacity
              onPress={() => alert('Hello, world!')}
              style={styles.buttonSubmit}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </>
      }
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03F7EB',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400
  },
  constinerLogin: {
    backgroundColor: 'rgba(122, 40, 203, 0.2)',
    height: '55%',
    width: "80%",
    display: 'flex',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgProfile: {
    width: 80,
    height: 80,
  },
  tabs: {
    display: 'flex',
    flexDirection:'row',
    marginBottom: 40,
    width: '80%',
  },
  buttonTabs: {
    marginRight: 20
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    marginTop: 15,
    height: 50,
    width: '85%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#7A28CB',
    color: '#7A28CB',
    borderRadius: 10
  },
  inputPassword: {
    marginTop: 15,
    height: 50,
    width: '85%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#7A28CB',
    color: '#7A28CB',
    borderRadius: 10
  },
  inputEmail: {
    marginTop: 15,
    height: 50,
    width: '85%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#7A28CB',
    color: '#7A28CB',
    borderRadius: 10
  },
  buttonSubmit: {
    backgroundColor: '#7A28CB',
    width: '85%',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    borderRadius: 50
  },
  containerCadastrar: {
    width: '100%',
    alignItems: 'center'
  }
});
