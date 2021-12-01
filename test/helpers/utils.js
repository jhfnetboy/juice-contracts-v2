import { BigNumber } from '@ethersproject/bignumber';
import { ethers, network } from 'hardhat';

export function makePackedPermissions(permissionIndexes) {
  return permissionIndexes.reduce(
    (sum, i) => sum.add(ethers.BigNumber.from(2).pow(i)),
    ethers.BigNumber.from(0),
  );
}

export async function impersonateAccount(
  address,
  balance = BigNumber.from('0x1000000000000000000000'),
) {
  await network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [address],
  });

  await network.provider.send('hardhat_setBalance', [address, balance.toHexString()]);

  return await ethers.getSigner(address);
}

export async function deployJbToken(name, symbol) {
  const jbTokenFactory = await ethers.getContractFactory('JBToken');
  return await jbTokenFactory.deploy(name, symbol);
}

export function daysFromNow(days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}
  
export function daysFromDate(date, days) {
  let newDate = new Date();
  newDate.setDate(date.getDate() + days)
  return newDate;
}
  
export function dateInSeconds(date) {
  return Math.floor(date.getTime() / 1000);
}