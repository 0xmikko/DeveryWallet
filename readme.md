# Devery Wallet
Devery Wallet is an unique marketplace for luxury goods with proven ownership track. This solution helps to provide clear product history.

Video presentation: https://youtu.be/xF1MbdUn3Qo

## Advantages
- Creates a new huge market for second-hand luxury goods (old wines, jewerly etc.)
- Devery protocol adds digital rights for luxury goods (thiefs could have big challenges to sell them without changing digital ownership)
- Provide proven ownership track and guarantess uniqueness

# User story
1. The first product user scans a product and register an ownership.
2. When user deciced to sell a product, s/he press a button and this product will automatically appers in ,arketplace. All product info will be takes from Devery Registry
3. Potential buyer could check the uniqueness of product. Selling the product, current sellter transfer digital ownership.
4. New product user get a proudct and clear ownership track record which is a significant for many buyers!


# How to install
The program is written for React-Native framework and was tested on iOS devices (Android should work correct also).

# Current state
- Developed front-end with React-Native
- Developed working prototype using react for playing with Devery technology (not included in this repo)
- Developed smartcontract and tests are written
- Some web3 functionality were moved from react POC.

### Current challenges
I tried to move Devery Registry and web3 logic to React Native, but it has a following issue. When  I try to send transaction to smartcontract an error: "Error: Method eth_chainId not supported" appears.

This error is a problem with web3 / ganache-cli which I used for testing React POC. I'm going to find correct solution for this issue or change web3 version and finalize this project soon.
