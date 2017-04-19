import { Platform } from 'react-native';
const ios = Platform.OS === 'ios' ;

export default {
  //layout theme
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  stretchView: {
    alignItems: 'stretch',
    flex: 1
  },
  stretchImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  header: {
    marginTop: 300,
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#DDD',
    alignItems: 'stretch',
    height: '100%',
  },
  loadingContainer: {
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  //global elements
  buttonContainer: {
    position: 'absolute',
    bottom: -80,
    right: 40,
    left: 40,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#733'
  },
  picker: {
  },
  button: {
    fontWeight: 'bold',
  },
  error: {
    textAlign: 'center',
    color: '#F00',
    marginTop: 10
  },
  margin: {
    marginTop: 30
  }
}
