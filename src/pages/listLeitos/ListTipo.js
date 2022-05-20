import React from "react";
4;
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

export default function ListTipo({ navigation }) {
  const [leitos, setLeitos] = useState([]);
  const [adulto, setAdulto] = useState([]);
  const [infantil, setInfantil] = useState([]);

  useEffect(() => {
    database.collection("Leito").onSnapshot((querry) => {
      const list = [];
      querry.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setLeitos(list);
    });
    setAd();
    setInf();
  }, []);

  function setAd() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[2] == "adulto") {
        list.push(Leito);
      }
      setAdulto(list);
    });
  }

  function setInf() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[2] == "infantil") {
        list.push(Leito);
      }
      setInfantil(list);
    });
  }

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ListaDeLeitos", {
              leitos: infantil,
            });
          }}
        >
          <View style={[styless.container]}>
            <View style={[styless.lives]}>
              <View style={[styless.head]}>
                <FontAwesome style={styless.convenio} />
                <Text style={[styless.title]}>
                  {" "}
                  LEITOS INFANTIL - {infantil.length}
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
                leitos: adulto,
              });
            }}
          >
            <View style={[styless.container]}>
              <View style={[styless.lives]}>
                <View style={[styless.head]}>
                  <FontAwesome style={styless.convenio} />
                  <Text style={[styless.title]}>
                    {" "}
                    LEITOS ADULTO - {adulto.length}
                  </Text>
                </View>
                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
  convenio: {
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
