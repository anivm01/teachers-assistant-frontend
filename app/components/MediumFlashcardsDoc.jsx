import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export default function MediumFlashcardsDoc({ wordList }) {
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
      height: "148.5mm",
      width: "210mm",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
    },
    image_box: {
      height: "100%",
      width: "50%",
      padding: "5mm",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
    },
    image: {
      objectFit: "contain",
      transform: "rotate(-90deg)",
      maxHeight: "80%",
      maxWidth: "80%",
    },
    vocabulary: {
      height: "100%",
      width: "50%",
      padding: "5mm",
      border: "1px solid black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "48px",
      fontFamily: "TeachingPrint",
      transform: "rotate(90deg)",
    },
  });

  return (
    <Document>
      <Page wrap={true} size="A4">
        <View style={styles.page}>
          {wordList.map((single, index) => {
            return (
              <View style={styles.box} key={index}>
                <View style={styles.image_box}>
                  <Image src={single.src} style={styles.image} />
                </View>
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
