import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const style = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: theme.align.center
  }
})

export default function StyleText ({children, align, color, fontSize, fontWeight, ...restOfProps}) {

  const textStyles = [
    style.text,
    color === 'primary' && style.colorPrimary,
    color === 'secondary' && style.colorSecondary,
    fontSize === 'subheading' && style.subheading,
    align === 'center' && style.textAlignCenter,
    fontWeight === 'bold' && style.bold
  ]
  
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}