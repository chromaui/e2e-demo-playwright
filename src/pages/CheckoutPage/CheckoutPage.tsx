import styled, { css } from 'styled-components'

import { useAppSelector } from '../../app-state'
import { OrderSummary } from '../../components/shopping-cart'
import { selectCartItems } from '../../app-state/cart'
import { breakpoints } from '../../styles/breakpoints'
import { Heading } from '../../components/typography/Heading'
import { MultiStepForm } from '../../components/registration-form/MultiStepForm'

const ContentContainer = styled.div`
  display: flex;
  margin-top: -12rem !important;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: flex-start;

  @media ${breakpoints.S} {
    margin-top: -10rem !important;
    flex-direction: row;
  }
`

const OrderDetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  @media ${breakpoints.M} {
    width: 420px;
  }
`

const TopContainer = styled.div(
  ({ theme: { color, spacing } }) => css`
    padding-top: ${spacing.xl};
    margin-bottom: ${spacing.s};
    min-height: 260px;
    background: ${color.checkoutTopBackground};

    @media ${breakpoints.M} {
      padding-top: ${spacing.xxl};
      min-height: 300px;
    }
  `
)

const StyledHeading = styled(Heading)`
    margin: 0 auto;
`

const PageContainer = styled.div(
  ({ theme: { color, spacing } }) => css`
    min-height: 100vh;
    padding-bottom: ${spacing.xxl};
    background: ${color.checkoutBottomBackground};
  `
)

export const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <PageContainer>
      <TopContainer>
        <StyledHeading level={2} className="container">
          Checkout
        </StyledHeading>
      </TopContainer>
      <ContentContainer className="container">
        <MultiStepForm />
        <OrderDetailsContainer>
          <OrderSummary cartItems={cartItems} />
        </OrderDetailsContainer>
      </ContentContainer>
    </PageContainer>
  )
}
