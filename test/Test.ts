import assert from "assert";
import { 
  TestHelpers,
  MonadexFactory_PoolCreated
} from "generated";
const { MockDb, MonadexFactory } = TestHelpers;

describe("MonadexFactory contract PoolCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MonadexFactory contract PoolCreated event
  const event = MonadexFactory.PoolCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MonadexFactory_PoolCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MonadexFactory.PoolCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMonadexFactoryPoolCreated = mockDbUpdated.entities.MonadexFactory_PoolCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMonadexFactoryPoolCreated: MonadexFactory_PoolCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      pool: event.params.pool,
      tokenA: event.params.tokenA,
      tokenB: event.params.tokenB,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMonadexFactoryPoolCreated, expectedMonadexFactoryPoolCreated, "Actual MonadexFactoryPoolCreated should be the same as the expectedMonadexFactoryPoolCreated");
  });
});
