import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body : {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 24,
    paddingTop: 80,
    gap: 5
  },
  task: {
    height: 40,
    marginTop: 5,
    backgroundColor: '#3f4141',
    borderRadius: 5,
    flexDirection: 'row',
    textAlign: 'center'
  },
  addButton: {
    flex: 1,
    width: 50,
    fontWeight: '200',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#CCCCCC',

  },
  trash: {
    paddingTop: 8,
    paddingEnd: 10
  },
  input: {
    flex: 1,
    color: '#CCCCCC',
    fontWeight: '400',
    fontSize: 15,
  },
  content: {
    flex: 1,
    color: '#FFF',
    fontWeight: '400',
    fontSize: 15,
    textAlignVertical: 'center'
  },
  progress: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 3,
  }
})