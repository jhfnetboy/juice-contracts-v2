// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import './../interfaces/IJBTerminal.sol';

struct JBRedeemParamsData {
  // The terminal that is facilitating the redemption.
  IJBTerminal terminal;
  // The holder of the tokens being redeemed.
  address holder;
  // The proposed number of tokens being redeemed.
  uint256 tokenCount;
  // The ID of the project whos tokens are being redeemed.
  uint256 projectId;
  // The redemption rate of the funding cycle during which the redemption is being made.
  uint256 redemptionRate;
  // The ballot redemption rate of the funding cycle during which the redemption is being made.
  uint256 ballotRedemptionRate;
  // TODO
  uint256 decimals;
  // The currency that the stored balance is expected to be in terms of.
  uint256 currency;
  // The proposed beneficiary of the ETH being claimed by making the redemption.
  address beneficiary;
  // The proposed memo that is being emitted alongside the redemption.
  string memo;
}
