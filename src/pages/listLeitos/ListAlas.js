import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import database from "../../config/database";

export default function ListAlas({ navigation }) {
  const [leitos, setLeitos] = useState([]);
  const [sul, setSul] = useState([]);
  const [norte, setNorte] = useState([]);
  const [leste, setLeste] = useState([]);
  const [oeste, setOeste] = useState([]);

  useEffect(() => {
    database.collection("Leito").onSnapshot((querry) => {
      const list = [];
      querry.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setLeitos(list);
    });
    setN();
    setS();
    setL();
    setO();
  }, []);

  function setN() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[0] == "ala norte") {
        list.push(Leito);
      }
      setNorte(list);
    });
  }

  function setS() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[0] == "ala sul") {
        list.push(Leito);
      }
      setSul(list);
    });
  }

  function setL() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[0] == "ala leste") {
        list.push(Leito);
      }
      setLeste(list);
    });
  }

  function setO() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[0] == "ala oeste") {
        list.push(Leito);
      }
      setOeste(list);
    });
  }

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ListaDeLeitos", {
              leitos: norte,
            });
          }}
        >
          <View style={[styless.container]}>
            <View style={[styless.lives]}>
              <View style={[styless.head]}>
                <FontAwesome style={styless.alas} />
                <Text style={[styless.title]}>
                  {" "}
                  LEITOS ALA NORTE - {norte.length}
                </Text>
              </View>
              <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ListaDeLeitos", {
                leitos: sul,
              });
            }}
          >
            <View style={[styless.container]}>
              <View style={[styless.lives]}>
                <View style={[styless.head]}>
                  <FontAwesome style={styless.alas} />
                  <Text style={[styless.title]}>
                    {" "}
                    LEITOS ALA SUL - {sul.length}
                  </Text>
                </View>
                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ListaDeLeitos", {
            leitos: leste,
          });
        }}
      >
        <View style={[styless.container]}>
          <View style={[styless.lives]}>
            <View style={[styless.head]}>
              <FontAwesome style={styless.alas} />
              <Text style={[styless.title]}>
                {" "}
                LEITOS ALA LESTE - {leste.length}
              </Text>
            </View>
            <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ListaDeLeitos", {
              leitos: oeste,
            });
          }}
        >
          <View style={[styless.container]}>
            <View style={[styless.lives]}>
              <View style={[styless.head]}>
                <FontAwesome style={styless.alas} />
                <Text style={[styless.title]}>
                  {" "}
                  LEITOS ALA OESTE - {oeste.length}
                </Text>
              </View>
              <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  lives: {
    flexDirection: "column",
    backgroundColor: "#dcdcdc",
    width: "94%",
    height: 120,
    paddingTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  alas: {
    fontSize: 26,
  },
  head: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 20,
  },
  shortdescription: {
    fontSize: 16,
    paddingTop: 15,
    alignSelf: "center",
  },
  text: {
    color: "#6495ED",
    paddingTop: 20,
    fontSize: 20,
    alignSelf: "center",
  },
});
