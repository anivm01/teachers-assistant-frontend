import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export default function LargeFlashcardsDoc({ wordList }) {
  Font.register({
    family: "TeachingPrint",
    src: "/fonts/TeachingPrintRegular.woff",
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
    },
    box: {
      border: "1px solid black",
      color: "black",
      height: "297mm",
      width: "210mm",
      margin: "0 auto",
    },
    image: {
      objectFit: "contain",
      height: "50%",
      width: "100%",
      border: "1px solid black",
      padding: "5mm",
    },
    vocabulary: {
      height: "50%",
      width: "100%",
      padding: "5mm",
      border: "1px solid black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "64px",
      fontFamily: "TeachingPrint",
      transform: "rotate(180deg)",
    },
  });

  return (
    <Document>
      <Page wrap={true} size="A4">
        <View style={styles.page}>
          {wordList.map((single, index) => {
            return (
              <View style={styles.box} key={index}>
                <Image src={single.src} style={styles.image} />
                <View style={styles.vocabulary}>
                  <Text style={styles.text}>{single.word}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
