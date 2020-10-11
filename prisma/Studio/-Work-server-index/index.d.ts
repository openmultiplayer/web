import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.8.1
 * Query Engine version: 439da16b2f8314c6faca7d2dad2cdcf0732e8a9c
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
  GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
  : never

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type PrismaAction =
  | 'findOne'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
  action: PrismaAction
  args: any
  dataPath: string[]
  runInTransaction: boolean
}

/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$queryRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']
  /**
   * @deprecated renamed to `$transaction`
   */
  transaction: PromiseConstructor['all']

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): UserDelegate;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): ServerDelegate;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): RuleDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const UserDistinctFieldEnum: {
  id: 'id',
  email: 'email',
  name: 'name'
};

export declare type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


export declare const ServerDistinctFieldEnum: {
  id: 'id',
  ip: 'ip',
  hn: 'hn',
  pc: 'pc',
  pm: 'pm',
  gm: 'gm',
  la: 'la',
  pa: 'pa',
  vn: 'vn',
  domain: 'domain',
  description: 'description',
  banner: 'banner',
  userId: 'userId',
  active: 'active',
  updatedAt: 'updatedAt'
};

export declare type ServerDistinctFieldEnum = (typeof ServerDistinctFieldEnum)[keyof typeof ServerDistinctFieldEnum]


export declare const RuleDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  value: 'value',
  serverId: 'serverId'
};

export declare type RuleDistinctFieldEnum = (typeof RuleDistinctFieldEnum)[keyof typeof RuleDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export declare const QueryMode: {
  default: 'default',
  insensitive: 'insensitive'
};

export declare type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]



/**
 * Model User
 */

export type User = {
  id: string
  email: string
  name: string
}


export type AggregateUser = {
  count: number
}



export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: Enumerable<UserOrderByInput> | UserOrderByInput
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
  count?: true
}

export type GetUserAggregateType<T extends AggregateUserArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type UserSelect = {
  id?: boolean
  email?: boolean
  name?: boolean
  servers?: boolean | FindManyServerArgs
}

export type UserInclude = {
  servers?: boolean | FindManyServerArgs
}

export type UserGetPayload<
  S extends boolean | null | undefined | UserArgs,
  U = keyof S
> = S extends true
  ? User
  : S extends undefined
  ? never
  : S extends UserArgs | FindManyUserArgs
  ? 'include' extends U
    ? User  & {
      [P in TrueKeys<S['include']>]:
      P extends 'servers'
      ? Array<ServerGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof User ? User[P]
: 
      P extends 'servers'
      ? Array<ServerGetPayload<S['select'][P]>> : never
    }
  : User
: User


export interface UserDelegate {
  /**
   * Find zero or one User that matches the filter.
   * @param {FindOneUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserArgs>(
    args: Subset<T, FindOneUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find the first User that matches the filter.
   * @param {FindFirstUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstUserArgs>(
    args?: Subset<T, FindFirstUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find zero or more Users that matches the filter.
   * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserArgs>(
    args?: Subset<T, FindManyUserArgs>
  ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const User = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
  **/
  create<T extends UserCreateArgs>(
    args: Subset<T, UserCreateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const User = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
  **/
  delete<T extends UserDeleteArgs>(
    args: Subset<T, UserDeleteArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends UserUpdateArgs>(
    args: Subset<T, UserUpdateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserDeleteManyArgs>(
    args: Subset<T, UserDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Users.
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserUpdateManyArgs>(
    args: Subset<T, UserUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
  **/
  upsert<T extends UserUpsertArgs>(
    args: Subset<T, UserUpsertArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateUserArgs>(args: Subset<T, AggregateUserArgs>): Promise<GetUserAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__UserClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  servers<T extends FindManyServerArgs = {}>(args?: Subset<T, FindManyServerArgs>): CheckSelect<T, Promise<Array<Server>>, Promise<Array<ServerGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * User findOne
 */
export type FindOneUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which User to fetch.
  **/
  where: UserWhereUniqueInput
}


/**
 * User findFirst
 */
export type FindFirstUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which User to fetch.
  **/
  where?: UserWhereInput
  orderBy?: Enumerable<UserOrderByInput> | UserOrderByInput
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
}


/**
 * User findMany
 */
export type FindManyUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which Users to fetch.
  **/
  where?: UserWhereInput
  /**
   * Determine the order of the Users to fetch.
  **/
  orderBy?: Enumerable<UserOrderByInput> | UserOrderByInput
  /**
   * Sets the position for listing Users.
  **/
  cursor?: UserWhereUniqueInput
  /**
   * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Users.
  **/
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
}


/**
 * User create
 */
export type UserCreateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to create a User.
  **/
  data: UserCreateInput
}


/**
 * User update
 */
export type UserUpdateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to update a User.
  **/
  data: UserUpdateInput
  /**
   * Choose, which User to update.
  **/
  where: UserWhereUniqueInput
}


/**
 * User updateMany
 */
export type UserUpdateManyArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}


/**
 * User upsert
 */
export type UserUpsertArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The filter to search for the User to update in case it exists.
  **/
  where: UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
  **/
  create: UserCreateInput
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
  **/
  update: UserUpdateInput
}


/**
 * User delete
 */
export type UserDeleteArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter which User to delete.
  **/
  where: UserWhereUniqueInput
}


/**
 * User deleteMany
 */
export type UserDeleteManyArgs = {
  where?: UserWhereInput
}


/**
 * User without action
 */
export type UserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
}



/**
 * Model Server
 */

export type Server = {
  id: string
  ip: string
  hn: string
  pc: number
  pm: number
  gm: string
  la: string
  pa: boolean
  vn: string
  domain: string | null
  description: string | null
  banner: string | null
  userId: string | null
  active: boolean
  updatedAt: Date
}


export type AggregateServer = {
  count: number
  avg: ServerAvgAggregateOutputType | null
  sum: ServerSumAggregateOutputType | null
  min: ServerMinAggregateOutputType | null
  max: ServerMaxAggregateOutputType | null
}

export type ServerAvgAggregateOutputType = {
  pc: number
  pm: number
}

export type ServerSumAggregateOutputType = {
  pc: number
  pm: number
}

export type ServerMinAggregateOutputType = {
  pc: number
  pm: number
}

export type ServerMaxAggregateOutputType = {
  pc: number
  pm: number
}


export type ServerAvgAggregateInputType = {
  pc?: true
  pm?: true
}

export type ServerSumAggregateInputType = {
  pc?: true
  pm?: true
}

export type ServerMinAggregateInputType = {
  pc?: true
  pm?: true
}

export type ServerMaxAggregateInputType = {
  pc?: true
  pm?: true
}

export type AggregateServerArgs = {
  where?: ServerWhereInput
  orderBy?: Enumerable<ServerOrderByInput> | ServerOrderByInput
  cursor?: ServerWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ServerDistinctFieldEnum>
  count?: true
  avg?: ServerAvgAggregateInputType
  sum?: ServerSumAggregateInputType
  min?: ServerMinAggregateInputType
  max?: ServerMaxAggregateInputType
}

export type GetServerAggregateType<T extends AggregateServerArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetServerAggregateScalarType<T[P]>
}

export type GetServerAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ServerAvgAggregateOutputType ? ServerAvgAggregateOutputType[P] : never
}
    
    

export type ServerSelect = {
  id?: boolean
  ip?: boolean
  hn?: boolean
  pc?: boolean
  pm?: boolean
  gm?: boolean
  la?: boolean
  pa?: boolean
  vn?: boolean
  ru?: boolean | FindManyRuleArgs
  domain?: boolean
  description?: boolean
  banner?: boolean
  User?: boolean | UserArgs
  userId?: boolean
  active?: boolean
  updatedAt?: boolean
}

export type ServerInclude = {
  ru?: boolean | FindManyRuleArgs
  User?: boolean | UserArgs
}

export type ServerGetPayload<
  S extends boolean | null | undefined | ServerArgs,
  U = keyof S
> = S extends true
  ? Server
  : S extends undefined
  ? never
  : S extends ServerArgs | FindManyServerArgs
  ? 'include' extends U
    ? Server  & {
      [P in TrueKeys<S['include']>]:
      P extends 'ru'
      ? Array<RuleGetPayload<S['include'][P]>> :
      P extends 'User'
      ? UserGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Server ? Server[P]
: 
      P extends 'ru'
      ? Array<RuleGetPayload<S['select'][P]>> :
      P extends 'User'
      ? UserGetPayload<S['select'][P]> | null : never
    }
  : Server
: Server


export interface ServerDelegate {
  /**
   * Find zero or one Server that matches the filter.
   * @param {FindOneServerArgs} args - Arguments to find a Server
   * @example
   * // Get one Server
   * const server = await prisma.server.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneServerArgs>(
    args: Subset<T, FindOneServerArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server | null>, Prisma__ServerClient<ServerGetPayload<T> | null>>
  /**
   * Find the first Server that matches the filter.
   * @param {FindFirstServerArgs} args - Arguments to find a Server
   * @example
   * // Get one Server
   * const server = await prisma.server.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstServerArgs>(
    args?: Subset<T, FindFirstServerArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server | null>, Prisma__ServerClient<ServerGetPayload<T> | null>>
  /**
   * Find zero or more Servers that matches the filter.
   * @param {FindManyServerArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Servers
   * const servers = await prisma.server.findMany()
   * 
   * // Get first 10 Servers
   * const servers = await prisma.server.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyServerArgs>(
    args?: Subset<T, FindManyServerArgs>
  ): CheckSelect<T, Promise<Array<Server>>, Promise<Array<ServerGetPayload<T>>>>
  /**
   * Create a Server.
   * @param {ServerCreateArgs} args - Arguments to create a Server.
   * @example
   * // Create one Server
   * const Server = await prisma.server.create({
   *   data: {
   *     // ... data to create a Server
   *   }
   * })
   * 
  **/
  create<T extends ServerCreateArgs>(
    args: Subset<T, ServerCreateArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>
  /**
   * Delete a Server.
   * @param {ServerDeleteArgs} args - Arguments to delete one Server.
   * @example
   * // Delete one Server
   * const Server = await prisma.server.delete({
   *   where: {
   *     // ... filter to delete one Server
   *   }
   * })
   * 
  **/
  delete<T extends ServerDeleteArgs>(
    args: Subset<T, ServerDeleteArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>
  /**
   * Update one Server.
   * @param {ServerUpdateArgs} args - Arguments to update one Server.
   * @example
   * // Update one Server
   * const server = await prisma.server.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ServerUpdateArgs>(
    args: Subset<T, ServerUpdateArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>
  /**
   * Delete zero or more Servers.
   * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
   * @example
   * // Delete a few Servers
   * const { count } = await prisma.server.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ServerDeleteManyArgs>(
    args: Subset<T, ServerDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Servers.
   * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Servers
   * const server = await prisma.server.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ServerUpdateManyArgs>(
    args: Subset<T, ServerUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Server.
   * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
   * @example
   * // Update or create a Server
   * const server = await prisma.server.upsert({
   *   create: {
   *     // ... data to create a Server
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Server we want to update
   *   }
   * })
  **/
  upsert<T extends ServerUpsertArgs>(
    args: Subset<T, ServerUpsertArgs>
  ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyServerArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateServerArgs>(args: Subset<T, AggregateServerArgs>): Promise<GetServerAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Server.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ServerClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  ru<T extends FindManyRuleArgs = {}>(args?: Subset<T, FindManyRuleArgs>): CheckSelect<T, Promise<Array<Rule>>, Promise<Array<RuleGetPayload<T>>>>;

  User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Server findOne
 */
export type FindOneServerArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * Filter, which Server to fetch.
  **/
  where: ServerWhereUniqueInput
}


/**
 * Server findFirst
 */
export type FindFirstServerArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * Filter, which Server to fetch.
  **/
  where?: ServerWhereInput
  orderBy?: Enumerable<ServerOrderByInput> | ServerOrderByInput
  cursor?: ServerWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ServerDistinctFieldEnum>
}


/**
 * Server findMany
 */
export type FindManyServerArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * Filter, which Servers to fetch.
  **/
  where?: ServerWhereInput
  /**
   * Determine the order of the Servers to fetch.
  **/
  orderBy?: Enumerable<ServerOrderByInput> | ServerOrderByInput
  /**
   * Sets the position for listing Servers.
  **/
  cursor?: ServerWhereUniqueInput
  /**
   * The number of Servers to fetch. If negative number, it will take Servers before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Servers.
  **/
  skip?: number
  distinct?: Enumerable<ServerDistinctFieldEnum>
}


/**
 * Server create
 */
export type ServerCreateArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * The data needed to create a Server.
  **/
  data: ServerCreateInput
}


/**
 * Server update
 */
export type ServerUpdateArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * The data needed to update a Server.
  **/
  data: ServerUpdateInput
  /**
   * Choose, which Server to update.
  **/
  where: ServerWhereUniqueInput
}


/**
 * Server updateMany
 */
export type ServerUpdateManyArgs = {
  data: ServerUpdateManyMutationInput
  where?: ServerWhereInput
}


/**
 * Server upsert
 */
export type ServerUpsertArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * The filter to search for the Server to update in case it exists.
  **/
  where: ServerWhereUniqueInput
  /**
   * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
  **/
  create: ServerCreateInput
  /**
   * In case the Server was found with the provided `where` argument, update it with this data.
  **/
  update: ServerUpdateInput
}


/**
 * Server delete
 */
export type ServerDeleteArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
  /**
   * Filter which Server to delete.
  **/
  where: ServerWhereUniqueInput
}


/**
 * Server deleteMany
 */
export type ServerDeleteManyArgs = {
  where?: ServerWhereInput
}


/**
 * Server without action
 */
export type ServerArgs = {
  /**
   * Select specific fields to fetch from the Server
  **/
  select?: ServerSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: ServerInclude | null
}



/**
 * Model Rule
 */

export type Rule = {
  id: number
  name: string
  value: string
  serverId: string | null
}


export type AggregateRule = {
  count: number
  avg: RuleAvgAggregateOutputType | null
  sum: RuleSumAggregateOutputType | null
  min: RuleMinAggregateOutputType | null
  max: RuleMaxAggregateOutputType | null
}

export type RuleAvgAggregateOutputType = {
  id: number
}

export type RuleSumAggregateOutputType = {
  id: number
}

export type RuleMinAggregateOutputType = {
  id: number
}

export type RuleMaxAggregateOutputType = {
  id: number
}


export type RuleAvgAggregateInputType = {
  id?: true
}

export type RuleSumAggregateInputType = {
  id?: true
}

export type RuleMinAggregateInputType = {
  id?: true
}

export type RuleMaxAggregateInputType = {
  id?: true
}

export type AggregateRuleArgs = {
  where?: RuleWhereInput
  orderBy?: Enumerable<RuleOrderByInput> | RuleOrderByInput
  cursor?: RuleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<RuleDistinctFieldEnum>
  count?: true
  avg?: RuleAvgAggregateInputType
  sum?: RuleSumAggregateInputType
  min?: RuleMinAggregateInputType
  max?: RuleMaxAggregateInputType
}

export type GetRuleAggregateType<T extends AggregateRuleArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetRuleAggregateScalarType<T[P]>
}

export type GetRuleAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof RuleAvgAggregateOutputType ? RuleAvgAggregateOutputType[P] : never
}
    
    

export type RuleSelect = {
  id?: boolean
  name?: boolean
  value?: boolean
  Server?: boolean | ServerArgs
  serverId?: boolean
}

export type RuleInclude = {
  Server?: boolean | ServerArgs
}

export type RuleGetPayload<
  S extends boolean | null | undefined | RuleArgs,
  U = keyof S
> = S extends true
  ? Rule
  : S extends undefined
  ? never
  : S extends RuleArgs | FindManyRuleArgs
  ? 'include' extends U
    ? Rule  & {
      [P in TrueKeys<S['include']>]:
      P extends 'Server'
      ? ServerGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Rule ? Rule[P]
: 
      P extends 'Server'
      ? ServerGetPayload<S['select'][P]> | null : never
    }
  : Rule
: Rule


export interface RuleDelegate {
  /**
   * Find zero or one Rule that matches the filter.
   * @param {FindOneRuleArgs} args - Arguments to find a Rule
   * @example
   * // Get one Rule
   * const rule = await prisma.rule.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneRuleArgs>(
    args: Subset<T, FindOneRuleArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule | null>, Prisma__RuleClient<RuleGetPayload<T> | null>>
  /**
   * Find the first Rule that matches the filter.
   * @param {FindFirstRuleArgs} args - Arguments to find a Rule
   * @example
   * // Get one Rule
   * const rule = await prisma.rule.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstRuleArgs>(
    args?: Subset<T, FindFirstRuleArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule | null>, Prisma__RuleClient<RuleGetPayload<T> | null>>
  /**
   * Find zero or more Rules that matches the filter.
   * @param {FindManyRuleArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Rules
   * const rules = await prisma.rule.findMany()
   * 
   * // Get first 10 Rules
   * const rules = await prisma.rule.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyRuleArgs>(
    args?: Subset<T, FindManyRuleArgs>
  ): CheckSelect<T, Promise<Array<Rule>>, Promise<Array<RuleGetPayload<T>>>>
  /**
   * Create a Rule.
   * @param {RuleCreateArgs} args - Arguments to create a Rule.
   * @example
   * // Create one Rule
   * const Rule = await prisma.rule.create({
   *   data: {
   *     // ... data to create a Rule
   *   }
   * })
   * 
  **/
  create<T extends RuleCreateArgs>(
    args: Subset<T, RuleCreateArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule>, Prisma__RuleClient<RuleGetPayload<T>>>
  /**
   * Delete a Rule.
   * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
   * @example
   * // Delete one Rule
   * const Rule = await prisma.rule.delete({
   *   where: {
   *     // ... filter to delete one Rule
   *   }
   * })
   * 
  **/
  delete<T extends RuleDeleteArgs>(
    args: Subset<T, RuleDeleteArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule>, Prisma__RuleClient<RuleGetPayload<T>>>
  /**
   * Update one Rule.
   * @param {RuleUpdateArgs} args - Arguments to update one Rule.
   * @example
   * // Update one Rule
   * const rule = await prisma.rule.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends RuleUpdateArgs>(
    args: Subset<T, RuleUpdateArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule>, Prisma__RuleClient<RuleGetPayload<T>>>
  /**
   * Delete zero or more Rules.
   * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
   * @example
   * // Delete a few Rules
   * const { count } = await prisma.rule.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends RuleDeleteManyArgs>(
    args: Subset<T, RuleDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Rules.
   * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Rules
   * const rule = await prisma.rule.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends RuleUpdateManyArgs>(
    args: Subset<T, RuleUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Rule.
   * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
   * @example
   * // Update or create a Rule
   * const rule = await prisma.rule.upsert({
   *   create: {
   *     // ... data to create a Rule
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Rule we want to update
   *   }
   * })
  **/
  upsert<T extends RuleUpsertArgs>(
    args: Subset<T, RuleUpsertArgs>
  ): CheckSelect<T, Prisma__RuleClient<Rule>, Prisma__RuleClient<RuleGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyRuleArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateRuleArgs>(args: Subset<T, AggregateRuleArgs>): Promise<GetRuleAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Rule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__RuleClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  Server<T extends ServerArgs = {}>(args?: Subset<T, ServerArgs>): CheckSelect<T, Prisma__ServerClient<Server | null>, Prisma__ServerClient<ServerGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Rule findOne
 */
export type FindOneRuleArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * Filter, which Rule to fetch.
  **/
  where: RuleWhereUniqueInput
}


/**
 * Rule findFirst
 */
export type FindFirstRuleArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * Filter, which Rule to fetch.
  **/
  where?: RuleWhereInput
  orderBy?: Enumerable<RuleOrderByInput> | RuleOrderByInput
  cursor?: RuleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<RuleDistinctFieldEnum>
}


/**
 * Rule findMany
 */
export type FindManyRuleArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * Filter, which Rules to fetch.
  **/
  where?: RuleWhereInput
  /**
   * Determine the order of the Rules to fetch.
  **/
  orderBy?: Enumerable<RuleOrderByInput> | RuleOrderByInput
  /**
   * Sets the position for listing Rules.
  **/
  cursor?: RuleWhereUniqueInput
  /**
   * The number of Rules to fetch. If negative number, it will take Rules before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Rules.
  **/
  skip?: number
  distinct?: Enumerable<RuleDistinctFieldEnum>
}


/**
 * Rule create
 */
export type RuleCreateArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * The data needed to create a Rule.
  **/
  data: RuleCreateInput
}


/**
 * Rule update
 */
export type RuleUpdateArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * The data needed to update a Rule.
  **/
  data: RuleUpdateInput
  /**
   * Choose, which Rule to update.
  **/
  where: RuleWhereUniqueInput
}


/**
 * Rule updateMany
 */
export type RuleUpdateManyArgs = {
  data: RuleUpdateManyMutationInput
  where?: RuleWhereInput
}


/**
 * Rule upsert
 */
export type RuleUpsertArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * The filter to search for the Rule to update in case it exists.
  **/
  where: RuleWhereUniqueInput
  /**
   * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
  **/
  create: RuleCreateInput
  /**
   * In case the Rule was found with the provided `where` argument, update it with this data.
  **/
  update: RuleUpdateInput
}


/**
 * Rule delete
 */
export type RuleDeleteArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
  /**
   * Filter which Rule to delete.
  **/
  where: RuleWhereUniqueInput
}


/**
 * Rule deleteMany
 */
export type RuleDeleteManyArgs = {
  where?: RuleWhereInput
}


/**
 * Rule without action
 */
export type RuleArgs = {
  /**
   * Select specific fields to fetch from the Rule
  **/
  select?: RuleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RuleInclude | null
}



/**
 * Deep Input Types
 */


export type UserWhereInput = {
  AND?: UserWhereInput | Enumerable<UserWhereInput>
  OR?: UserWhereInput | Enumerable<UserWhereInput>
  NOT?: UserWhereInput | Enumerable<UserWhereInput>
  id?: StringFilter | string
  email?: StringFilter | string
  name?: StringFilter | string
  servers?: ServerListRelationFilter
}

export type UserOrderByInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
}

export type UserWhereUniqueInput = {
  id?: string
}

export type ServerWhereInput = {
  AND?: ServerWhereInput | Enumerable<ServerWhereInput>
  OR?: ServerWhereInput | Enumerable<ServerWhereInput>
  NOT?: ServerWhereInput | Enumerable<ServerWhereInput>
  id?: StringFilter | string
  ip?: StringFilter | string
  hn?: StringFilter | string
  pc?: IntFilter | number
  pm?: IntFilter | number
  gm?: StringFilter | string
  la?: StringFilter | string
  pa?: BoolFilter | boolean
  vn?: StringFilter | string
  ru?: RuleListRelationFilter
  domain?: StringNullableFilter | string | null
  description?: StringNullableFilter | string | null
  banner?: StringNullableFilter | string | null
  User?: UserRelationFilter | UserWhereInput | null
  userId?: StringNullableFilter | string | null
  active?: BoolFilter | boolean
  updatedAt?: DateTimeFilter | Date | string
}

export type ServerOrderByInput = {
  id?: SortOrder
  ip?: SortOrder
  hn?: SortOrder
  pc?: SortOrder
  pm?: SortOrder
  gm?: SortOrder
  la?: SortOrder
  pa?: SortOrder
  vn?: SortOrder
  domain?: SortOrder
  description?: SortOrder
  banner?: SortOrder
  userId?: SortOrder
  active?: SortOrder
  updatedAt?: SortOrder
}

export type ServerWhereUniqueInput = {
  id?: string
  ip?: string
}

export type RuleWhereInput = {
  AND?: RuleWhereInput | Enumerable<RuleWhereInput>
  OR?: RuleWhereInput | Enumerable<RuleWhereInput>
  NOT?: RuleWhereInput | Enumerable<RuleWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  value?: StringFilter | string
  Server?: ServerRelationFilter | ServerWhereInput | null
  serverId?: StringNullableFilter | string | null
}

export type RuleOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  value?: SortOrder
  serverId?: SortOrder
}

export type RuleWhereUniqueInput = {
  id?: number
  Rule_serverId_rule_name_index?: Rule_serverId_rule_name_indexCompoundUniqueInput
}

export type UserCreateInput = {
  id?: string
  email: string
  name: string
  servers?: ServerCreateManyWithoutUserInput
}

export type UserUpdateInput = {
  id?: string | StringFieldUpdateOperationsInput
  email?: string | StringFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
  servers?: ServerUpdateManyWithoutUserInput
}

export type UserUpdateManyMutationInput = {
  id?: string | StringFieldUpdateOperationsInput
  email?: string | StringFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
}

export type ServerCreateInput = {
  id?: string
  ip: string
  hn: string
  pc: number
  pm: number
  gm: string
  la: string
  pa: boolean
  vn: string
  domain?: string | null
  description?: string | null
  banner?: string | null
  active: boolean
  updatedAt?: Date | string
  ru?: RuleCreateManyWithoutServerInput
  User?: UserCreateOneWithoutServersInput
}

export type ServerUpdateInput = {
  id?: string | StringFieldUpdateOperationsInput
  ip?: string | StringFieldUpdateOperationsInput
  hn?: string | StringFieldUpdateOperationsInput
  pc?: number | IntFieldUpdateOperationsInput
  pm?: number | IntFieldUpdateOperationsInput
  gm?: string | StringFieldUpdateOperationsInput
  la?: string | StringFieldUpdateOperationsInput
  pa?: boolean | BoolFieldUpdateOperationsInput
  vn?: string | StringFieldUpdateOperationsInput
  domain?: string | NullableStringFieldUpdateOperationsInput | null
  description?: string | NullableStringFieldUpdateOperationsInput | null
  banner?: string | NullableStringFieldUpdateOperationsInput | null
  active?: boolean | BoolFieldUpdateOperationsInput
  updatedAt?: Date | string | DateTimeFieldUpdateOperationsInput
  ru?: RuleUpdateManyWithoutServerInput
  User?: UserUpdateOneWithoutServersInput
}

export type ServerUpdateManyMutationInput = {
  id?: string | StringFieldUpdateOperationsInput
  ip?: string | StringFieldUpdateOperationsInput
  hn?: string | StringFieldUpdateOperationsInput
  pc?: number | IntFieldUpdateOperationsInput
  pm?: number | IntFieldUpdateOperationsInput
  gm?: string | StringFieldUpdateOperationsInput
  la?: string | StringFieldUpdateOperationsInput
  pa?: boolean | BoolFieldUpdateOperationsInput
  vn?: string | StringFieldUpdateOperationsInput
  domain?: string | NullableStringFieldUpdateOperationsInput | null
  description?: string | NullableStringFieldUpdateOperationsInput | null
  banner?: string | NullableStringFieldUpdateOperationsInput | null
  active?: boolean | BoolFieldUpdateOperationsInput
  updatedAt?: Date | string | DateTimeFieldUpdateOperationsInput
}

export type RuleCreateInput = {
  name: string
  value: string
  Server?: ServerCreateOneWithoutRuInput
}

export type RuleUpdateInput = {
  name?: string | StringFieldUpdateOperationsInput
  value?: string | StringFieldUpdateOperationsInput
  Server?: ServerUpdateOneWithoutRuInput
}

export type RuleUpdateManyMutationInput = {
  name?: string | StringFieldUpdateOperationsInput
  value?: string | StringFieldUpdateOperationsInput
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: string | NestedStringFilter
}

export type ServerListRelationFilter = {
  every?: ServerWhereInput
  some?: ServerWhereInput
  none?: ServerWhereInput
}

export type IntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type BoolFilter = {
  equals?: boolean
  not?: boolean | NestedBoolFilter
}

export type RuleListRelationFilter = {
  every?: RuleWhereInput
  some?: RuleWhereInput
  none?: RuleWhereInput
}

export type StringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: string | NestedStringNullableFilter | null
}

export type UserRelationFilter = {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type ServerRelationFilter = {
  is?: ServerWhereInput | null
  isNot?: ServerWhereInput | null
}

export type Rule_serverId_rule_name_indexCompoundUniqueInput = {
  name: string
  serverId: string
}

export type ServerCreateManyWithoutUserInput = {
  create?: ServerCreateWithoutUserInput | Enumerable<ServerCreateWithoutUserInput>
  connect?: ServerWhereUniqueInput | Enumerable<ServerWhereUniqueInput>
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type ServerUpdateManyWithoutUserInput = {
  create?: ServerCreateWithoutUserInput | Enumerable<ServerCreateWithoutUserInput>
  connect?: ServerWhereUniqueInput | Enumerable<ServerWhereUniqueInput>
  set?: ServerWhereUniqueInput | Enumerable<ServerWhereUniqueInput>
  disconnect?: ServerWhereUniqueInput | Enumerable<ServerWhereUniqueInput>
  delete?: ServerWhereUniqueInput | Enumerable<ServerWhereUniqueInput>
  update?: ServerUpdateWithWhereUniqueWithoutUserInput | Enumerable<ServerUpdateWithWhereUniqueWithoutUserInput>
  updateMany?: ServerUpdateManyWithWhereNestedInput | Enumerable<ServerUpdateManyWithWhereNestedInput>
  deleteMany?: ServerScalarWhereInput | Enumerable<ServerScalarWhereInput>
  upsert?: ServerUpsertWithWhereUniqueWithoutUserInput | Enumerable<ServerUpsertWithWhereUniqueWithoutUserInput>
}

export type RuleCreateManyWithoutServerInput = {
  create?: RuleCreateWithoutServerInput | Enumerable<RuleCreateWithoutServerInput>
  connect?: RuleWhereUniqueInput | Enumerable<RuleWhereUniqueInput>
}

export type UserCreateOneWithoutServersInput = {
  create?: UserCreateWithoutServersInput
  connect?: UserWhereUniqueInput
}

export type IntFieldUpdateOperationsInput = {
  set?: number
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type RuleUpdateManyWithoutServerInput = {
  create?: RuleCreateWithoutServerInput | Enumerable<RuleCreateWithoutServerInput>
  connect?: RuleWhereUniqueInput | Enumerable<RuleWhereUniqueInput>
  set?: RuleWhereUniqueInput | Enumerable<RuleWhereUniqueInput>
  disconnect?: RuleWhereUniqueInput | Enumerable<RuleWhereUniqueInput>
  delete?: RuleWhereUniqueInput | Enumerable<RuleWhereUniqueInput>
  update?: RuleUpdateWithWhereUniqueWithoutServerInput | Enumerable<RuleUpdateWithWhereUniqueWithoutServerInput>
  updateMany?: RuleUpdateManyWithWhereNestedInput | Enumerable<RuleUpdateManyWithWhereNestedInput>
  deleteMany?: RuleScalarWhereInput | Enumerable<RuleScalarWhereInput>
  upsert?: RuleUpsertWithWhereUniqueWithoutServerInput | Enumerable<RuleUpsertWithWhereUniqueWithoutServerInput>
}

export type UserUpdateOneWithoutServersInput = {
  create?: UserCreateWithoutServersInput
  connect?: UserWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: UserUpdateWithoutServersDataInput
  upsert?: UserUpsertWithoutServersInput
}

export type ServerCreateOneWithoutRuInput = {
  create?: ServerCreateWithoutRuInput
  connect?: ServerWhereUniqueInput
}

export type ServerUpdateOneWithoutRuInput = {
  create?: ServerCreateWithoutRuInput
  connect?: ServerWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: ServerUpdateWithoutRuDataInput
  upsert?: ServerUpsertWithoutRuInput
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type NestedIntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type NestedBoolFilter = {
  equals?: boolean
  not?: boolean | NestedBoolFilter
}

export type NestedStringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringNullableFilter | null
}

export type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type ServerCreateWithoutUserInput = {
  id?: string
  ip: string
  hn: string
  pc: number
  pm: number
  gm: string
  la: string
  pa: boolean
  vn: string
  domain?: string | null
  description?: string | null
  banner?: string | null
  active: boolean
  updatedAt?: Date | string
  ru?: RuleCreateManyWithoutServerInput
}

export type ServerUpdateWithWhereUniqueWithoutUserInput = {
  where: ServerWhereUniqueInput
  data: ServerUpdateWithoutUserDataInput
}

export type ServerUpdateManyWithWhereNestedInput = {
  where: ServerScalarWhereInput
  data: ServerUpdateManyDataInput
}

export type ServerScalarWhereInput = {
  AND?: ServerScalarWhereInput | Enumerable<ServerScalarWhereInput>
  OR?: ServerScalarWhereInput | Enumerable<ServerScalarWhereInput>
  NOT?: ServerScalarWhereInput | Enumerable<ServerScalarWhereInput>
  id?: StringFilter | string
  ip?: StringFilter | string
  hn?: StringFilter | string
  pc?: IntFilter | number
  pm?: IntFilter | number
  gm?: StringFilter | string
  la?: StringFilter | string
  pa?: BoolFilter | boolean
  vn?: StringFilter | string
  domain?: StringNullableFilter | string | null
  description?: StringNullableFilter | string | null
  banner?: StringNullableFilter | string | null
  userId?: StringNullableFilter | string | null
  active?: BoolFilter | boolean
  updatedAt?: DateTimeFilter | Date | string
}

export type ServerUpsertWithWhereUniqueWithoutUserInput = {
  where: ServerWhereUniqueInput
  update: ServerUpdateWithoutUserDataInput
  create: ServerCreateWithoutUserInput
}

export type RuleCreateWithoutServerInput = {
  name: string
  value: string
}

export type UserCreateWithoutServersInput = {
  id?: string
  email: string
  name: string
}

export type RuleUpdateWithWhereUniqueWithoutServerInput = {
  where: RuleWhereUniqueInput
  data: RuleUpdateWithoutServerDataInput
}

export type RuleUpdateManyWithWhereNestedInput = {
  where: RuleScalarWhereInput
  data: RuleUpdateManyDataInput
}

export type RuleScalarWhereInput = {
  AND?: RuleScalarWhereInput | Enumerable<RuleScalarWhereInput>
  OR?: RuleScalarWhereInput | Enumerable<RuleScalarWhereInput>
  NOT?: RuleScalarWhereInput | Enumerable<RuleScalarWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  value?: StringFilter | string
  serverId?: StringNullableFilter | string | null
}

export type RuleUpsertWithWhereUniqueWithoutServerInput = {
  where: RuleWhereUniqueInput
  update: RuleUpdateWithoutServerDataInput
  create: RuleCreateWithoutServerInput
}

export type UserUpdateWithoutServersDataInput = {
  id?: string | StringFieldUpdateOperationsInput
  email?: string | StringFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
}

export type UserUpsertWithoutServersInput = {
  update: UserUpdateWithoutServersDataInput
  create: UserCreateWithoutServersInput
}

export type ServerCreateWithoutRuInput = {
  id?: string
  ip: string
  hn: string
  pc: number
  pm: number
  gm: string
  la: string
  pa: boolean
  vn: string
  domain?: string | null
  description?: string | null
  banner?: string | null
  active: boolean
  updatedAt?: Date | string
  User?: UserCreateOneWithoutServersInput
}

export type ServerUpdateWithoutRuDataInput = {
  id?: string | StringFieldUpdateOperationsInput
  ip?: string | StringFieldUpdateOperationsInput
  hn?: string | StringFieldUpdateOperationsInput
  pc?: number | IntFieldUpdateOperationsInput
  pm?: number | IntFieldUpdateOperationsInput
  gm?: string | StringFieldUpdateOperationsInput
  la?: string | StringFieldUpdateOperationsInput
  pa?: boolean | BoolFieldUpdateOperationsInput
  vn?: string | StringFieldUpdateOperationsInput
  domain?: string | NullableStringFieldUpdateOperationsInput | null
  description?: string | NullableStringFieldUpdateOperationsInput | null
  banner?: string | NullableStringFieldUpdateOperationsInput | null
  active?: boolean | BoolFieldUpdateOperationsInput
  updatedAt?: Date | string | DateTimeFieldUpdateOperationsInput
  User?: UserUpdateOneWithoutServersInput
}

export type ServerUpsertWithoutRuInput = {
  update: ServerUpdateWithoutRuDataInput
  create: ServerCreateWithoutRuInput
}

export type ServerUpdateWithoutUserDataInput = {
  id?: string | StringFieldUpdateOperationsInput
  ip?: string | StringFieldUpdateOperationsInput
  hn?: string | StringFieldUpdateOperationsInput
  pc?: number | IntFieldUpdateOperationsInput
  pm?: number | IntFieldUpdateOperationsInput
  gm?: string | StringFieldUpdateOperationsInput
  la?: string | StringFieldUpdateOperationsInput
  pa?: boolean | BoolFieldUpdateOperationsInput
  vn?: string | StringFieldUpdateOperationsInput
  domain?: string | NullableStringFieldUpdateOperationsInput | null
  description?: string | NullableStringFieldUpdateOperationsInput | null
  banner?: string | NullableStringFieldUpdateOperationsInput | null
  active?: boolean | BoolFieldUpdateOperationsInput
  updatedAt?: Date | string | DateTimeFieldUpdateOperationsInput
  ru?: RuleUpdateManyWithoutServerInput
}

export type ServerUpdateManyDataInput = {
  id?: string | StringFieldUpdateOperationsInput
  ip?: string | StringFieldUpdateOperationsInput
  hn?: string | StringFieldUpdateOperationsInput
  pc?: number | IntFieldUpdateOperationsInput
  pm?: number | IntFieldUpdateOperationsInput
  gm?: string | StringFieldUpdateOperationsInput
  la?: string | StringFieldUpdateOperationsInput
  pa?: boolean | BoolFieldUpdateOperationsInput
  vn?: string | StringFieldUpdateOperationsInput
  domain?: string | NullableStringFieldUpdateOperationsInput | null
  description?: string | NullableStringFieldUpdateOperationsInput | null
  banner?: string | NullableStringFieldUpdateOperationsInput | null
  active?: boolean | BoolFieldUpdateOperationsInput
  updatedAt?: Date | string | DateTimeFieldUpdateOperationsInput
}

export type RuleUpdateWithoutServerDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  value?: string | StringFieldUpdateOperationsInput
}

export type RuleUpdateManyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  value?: string | StringFieldUpdateOperationsInput
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
