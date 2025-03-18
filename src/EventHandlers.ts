/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MonadexFactory,
  MonadexFactory_PoolCreated,
  Pair,
  Pair_Approval,
  Pair_Initialised,
  Pair_LiquidityAdded,
  Pair_LiquidityRemoved,
  Pair_ReservesUpdated,
  Pair_Transfer,
  MonadRaffle,
  MonadRaffle_OwnershipTransferred,
  MonadRaffle_EpochEnded,
  MonadRaffle_MinimumNftsToBeMintedEachEpochSet,
  MonadRaffle_MonadexV1RouterSet,
  MonadRaffle_EnteredRaffle,
} from "generated";

MonadexFactory.PoolCreated.contractRegister(
  async ({ event, context }) => {  
    context.addPair(event.params.pool);
  },
  { preRegisterDynamicContracts: true }
);

MonadexFactory.PoolCreated.handler(async ({ event, context }) => {
  const entity: MonadexFactory_PoolCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
    tokenA: event.params.tokenA,
    tokenB: event.params.tokenB,
  };

  context.MonadexFactory_PoolCreated.set(entity);
});


Pair.Approval.handler(async ({ event, context }) => {
  const entity: Pair_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    amount: event.params.amount,
  };

  context.Pair_Approval.set(entity);
});

Pair.Initialised.handler(async ({ event, context }) => {
  const entity: Pair_Initialised = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenA: event.params.tokenA,
    tokenB: event.params.tokenB,
  };

  context.Pair_Initialised.set(entity);
});

Pair.LiquidityAdded.handler(async ({ event, context }) => {
  const entity: Pair_LiquidityAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    by: event.params.by,
    receiver: event.params.receiver,
    amountA: event.params.amountA,
    amountB: event.params.amountB,
    lpTokensMinted: event.params.lpTokensMinted,
  };

  context.Pair_LiquidityAdded.set(entity);
});

Pair.LiquidityRemoved.handler(async ({ event, context }) => {
  const entity: Pair_LiquidityRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    by: event.params.by,
    receiver: event.params.receiver,
    amountA: event.params.amountA,
    amountB: event.params.amountB,
    lpTokensBurned: event.params.lpTokensBurned,
  };

  context.Pair_LiquidityRemoved.set(entity);
});



Pair.ReservesUpdated.handler(async ({ event, context }) => {
  const entity: Pair_ReservesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserveA: event.params.reserveA,
    reserveB: event.params.reserveB,
  };

  context.Pair_ReservesUpdated.set(entity);
});

Pair.Transfer.handler(async ({ event, context }) => {
  const entity: Pair_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.Pair_Transfer.set(entity);
});
// TODO add MonadRaffle

MonadRaffle.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: MonadRaffle_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.MonadRaffle_OwnershipTransferred.set(entity);
});

MonadRaffle.EpochEnded.handler(async ({ event, context }) => {
  const entity: MonadRaffle_EpochEnded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    epoch: event.params.epoch,
    randomNumber: event.params.randomNumber,
  };

  context.MonadRaffle_EpochEnded.set(entity);
});

MonadRaffle.MinimumNftsToBeMintedEachEpochSet.handler(async ({ event, context }) => {
  const entity: MonadRaffle_MinimumNftsToBeMintedEachEpochSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minimumNftsToBeMintedEachEpoch: event.params.minimumNftsToBeMintedEachEpoch,
  };

  context.MonadRaffle_MinimumNftsToBeMintedEachEpochSet.set(entity);
});

MonadRaffle.MonadexV1RouterSet.handler(async ({ event, context }) => {
  const entity: MonadRaffle_MonadexV1RouterSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    monadexV1Router: event.params.monadexV1Router,
  };

  context.MonadRaffle_MonadexV1RouterSet.set(entity);
});

MonadRaffle.EnteredRaffle.handler(async ({ event, context }) => {
  const entity: MonadRaffle_EnteredRaffle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiver: event.params.receiver,
    tokenIn: event.params.tokenIn,
    amount: event.params.amount,
    nftTokenId: event.params.nftTokenId,
    distance: event.params.distance,
  };

  context.MonadRaffle_EnteredRaffle.set(entity);
});
////