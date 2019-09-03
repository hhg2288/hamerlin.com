/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Container from "./Container"
import ContactForm from "./ContactForm"

export const fragment = graphql`
  fragment OnContactSection on Wordpress_Page_Pagesections_Sections_ContactSection {
    title
    text
  }
`

export default function ContactSection({ title, text }) {
  return (
    <Flex
      id="contacto"
      sx={{
        mb: 4,
      }}
    >
      <Container>
        <Flex
          sx={{
            flexDirection: ["column-reverse", "row"],
            alignItems: "flex-start",
          }}
        >
          <Flex sx={{ flexBasis: "100%", width: ["100%", "50%"] }}>
            <div sx={{ width: ["100%", "90%"], zIndex: 1 }}>
              <ContactForm />
            </div>
          </Flex>
          <Flex
            sx={{
              zIndex: 1,
              width: ["100%", "50%"],
              flexDirection: "column",
              justifyContent: "center",
              flexBasis: "100%",
              mb: 4,
            }}
          >
            <Styled.h2 sx={{ mt: 0 }}>{title}</Styled.h2>
            <Styled.p>{text}</Styled.p>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
