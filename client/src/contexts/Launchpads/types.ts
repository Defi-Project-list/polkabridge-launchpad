import { Contract } from 'web3-eth-contract'

export interface Launchpad {
  pid: number
  name: string
  symbol: string
  lpAddress: string
  lpContract: Contract
  lpExplorer: string
  lpBscAddress: string
  lpBscContract: Contract
  lpBscExplorer: string
  lpHarmonyAddress: string
  lpHarmonyContract: Contract
  lpPolygonAddress: string
  lpPolygonContract: Contract
  tokenAddress: string
  tokenContract: Contract
  tokenExplorer: string
  tokenSymbol: string
  icon: string
  description: string
  introduce: string
  website: string
  twitter: string
  telegram: string
  whitepaper: string
  id: string
  totalSupply: string
  total: string
  ratio: number
  min: number
  max: number,
  maxTier1: number,
  maxTier2: number,
  maxTier3: number,
  access: string,
  network: string,
  distribution: string,
  startAt: number,
  endAt: number,
  claimAt: number,
  startDate: string,
}

export interface LaunchpadsContext {
  launchpads: Launchpad[],
  unharvested: number
}