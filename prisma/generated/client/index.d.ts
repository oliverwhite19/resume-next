
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Employment
 * 
 */
export type Employment = {
  id: string
  company: string | null
  companyLink: string | null
  descriptor: string | null
  index: number | null
}

/**
 * Model Position
 * 
 */
export type Position = {
  id: string
  title: string | null
  employmentId: string
  start: Date | null
  end: Date | null
  details: string[]
  technologies: string[]
  index: number | null
}

/**
 * Model Education
 * 
 */
export type Education = {
  id: string
  title: string | null
  link: string | null
  end: Date | null
  description: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employments
 * const employments = await prisma.employment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
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
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employments
   * const employments = await prisma.employment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.employment`: Exposes CRUD operations for the **Employment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employments
    * const employments = await prisma.employment.findMany()
    * ```
    */
  get employment(): Prisma.EmploymentDelegate<GlobalReject>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<GlobalReject>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Employment: 'Employment',
    Position: 'Position',
    Education: 'Education'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
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
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmploymentCountOutputType
   */


  export type EmploymentCountOutputType = {
    positions: number
  }

  export type EmploymentCountOutputTypeSelect = {
    positions?: boolean
  }

  export type EmploymentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EmploymentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EmploymentCountOutputType
    : S extends undefined
    ? never
    : S extends EmploymentCountOutputTypeArgs
    ?'include' extends U
    ? EmploymentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EmploymentCountOutputType ? EmploymentCountOutputType[P] : never
  } 
    : EmploymentCountOutputType
  : EmploymentCountOutputType




  // Custom InputTypes

  /**
   * EmploymentCountOutputType without action
   */
  export type EmploymentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmploymentCountOutputType
     * 
    **/
    select?: EmploymentCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Employment
   */


  export type AggregateEmployment = {
    _count: EmploymentCountAggregateOutputType | null
    _avg: EmploymentAvgAggregateOutputType | null
    _sum: EmploymentSumAggregateOutputType | null
    _min: EmploymentMinAggregateOutputType | null
    _max: EmploymentMaxAggregateOutputType | null
  }

  export type EmploymentAvgAggregateOutputType = {
    index: number | null
  }

  export type EmploymentSumAggregateOutputType = {
    index: number | null
  }

  export type EmploymentMinAggregateOutputType = {
    id: string | null
    company: string | null
    companyLink: string | null
    descriptor: string | null
    index: number | null
  }

  export type EmploymentMaxAggregateOutputType = {
    id: string | null
    company: string | null
    companyLink: string | null
    descriptor: string | null
    index: number | null
  }

  export type EmploymentCountAggregateOutputType = {
    id: number
    company: number
    companyLink: number
    descriptor: number
    index: number
    _all: number
  }


  export type EmploymentAvgAggregateInputType = {
    index?: true
  }

  export type EmploymentSumAggregateInputType = {
    index?: true
  }

  export type EmploymentMinAggregateInputType = {
    id?: true
    company?: true
    companyLink?: true
    descriptor?: true
    index?: true
  }

  export type EmploymentMaxAggregateInputType = {
    id?: true
    company?: true
    companyLink?: true
    descriptor?: true
    index?: true
  }

  export type EmploymentCountAggregateInputType = {
    id?: true
    company?: true
    companyLink?: true
    descriptor?: true
    index?: true
    _all?: true
  }

  export type EmploymentAggregateArgs = {
    /**
     * Filter which Employment to aggregate.
     * 
    **/
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     * 
    **/
    orderBy?: Enumerable<EmploymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employments
    **/
    _count?: true | EmploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmploymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmploymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmploymentMaxAggregateInputType
  }

  export type GetEmploymentAggregateType<T extends EmploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployment[P]>
      : GetScalarType<T[P], AggregateEmployment[P]>
  }




  export type EmploymentGroupByArgs = {
    where?: EmploymentWhereInput
    orderBy?: Enumerable<EmploymentOrderByWithAggregationInput>
    by: Array<EmploymentScalarFieldEnum>
    having?: EmploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmploymentCountAggregateInputType | true
    _avg?: EmploymentAvgAggregateInputType
    _sum?: EmploymentSumAggregateInputType
    _min?: EmploymentMinAggregateInputType
    _max?: EmploymentMaxAggregateInputType
  }


  export type EmploymentGroupByOutputType = {
    id: string
    company: string | null
    companyLink: string | null
    descriptor: string | null
    index: number | null
    _count: EmploymentCountAggregateOutputType | null
    _avg: EmploymentAvgAggregateOutputType | null
    _sum: EmploymentSumAggregateOutputType | null
    _min: EmploymentMinAggregateOutputType | null
    _max: EmploymentMaxAggregateOutputType | null
  }

  type GetEmploymentGroupByPayload<T extends EmploymentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmploymentGroupByOutputType[P]>
            : GetScalarType<T[P], EmploymentGroupByOutputType[P]>
        }
      >
    >


  export type EmploymentSelect = {
    id?: boolean
    company?: boolean
    companyLink?: boolean
    descriptor?: boolean
    positions?: boolean | PositionFindManyArgs
    index?: boolean
    _count?: boolean | EmploymentCountOutputTypeArgs
  }

  export type EmploymentInclude = {
    positions?: boolean | PositionFindManyArgs
    _count?: boolean | EmploymentCountOutputTypeArgs
  }

  export type EmploymentGetPayload<
    S extends boolean | null | undefined | EmploymentArgs,
    U = keyof S
      > = S extends true
        ? Employment
    : S extends undefined
    ? never
    : S extends EmploymentArgs | EmploymentFindManyArgs
    ?'include' extends U
    ? Employment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'positions' ? Array < PositionGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmploymentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'positions' ? Array < PositionGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmploymentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Employment ? Employment[P] : never
  } 
    : Employment
  : Employment


  type EmploymentCountArgs = Merge<
    Omit<EmploymentFindManyArgs, 'select' | 'include'> & {
      select?: EmploymentCountAggregateInputType | true
    }
  >

  export interface EmploymentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Employment that matches the filter.
     * @param {EmploymentFindUniqueArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmploymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmploymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employment'> extends True ? CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>> : CheckSelect<T, Prisma__EmploymentClient<Employment | null >, Prisma__EmploymentClient<EmploymentGetPayload<T> | null >>

    /**
     * Find the first Employment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindFirstArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmploymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmploymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employment'> extends True ? CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>> : CheckSelect<T, Prisma__EmploymentClient<Employment | null >, Prisma__EmploymentClient<EmploymentGetPayload<T> | null >>

    /**
     * Find zero or more Employments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employments
     * const employments = await prisma.employment.findMany()
     * 
     * // Get first 10 Employments
     * const employments = await prisma.employment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employmentWithIdOnly = await prisma.employment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmploymentFindManyArgs>(
      args?: SelectSubset<T, EmploymentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Employment>>, PrismaPromise<Array<EmploymentGetPayload<T>>>>

    /**
     * Create a Employment.
     * @param {EmploymentCreateArgs} args - Arguments to create a Employment.
     * @example
     * // Create one Employment
     * const Employment = await prisma.employment.create({
     *   data: {
     *     // ... data to create a Employment
     *   }
     * })
     * 
    **/
    create<T extends EmploymentCreateArgs>(
      args: SelectSubset<T, EmploymentCreateArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Create many Employments.
     *     @param {EmploymentCreateManyArgs} args - Arguments to create many Employments.
     *     @example
     *     // Create many Employments
     *     const employment = await prisma.employment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmploymentCreateManyArgs>(
      args?: SelectSubset<T, EmploymentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Employment.
     * @param {EmploymentDeleteArgs} args - Arguments to delete one Employment.
     * @example
     * // Delete one Employment
     * const Employment = await prisma.employment.delete({
     *   where: {
     *     // ... filter to delete one Employment
     *   }
     * })
     * 
    **/
    delete<T extends EmploymentDeleteArgs>(
      args: SelectSubset<T, EmploymentDeleteArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Update one Employment.
     * @param {EmploymentUpdateArgs} args - Arguments to update one Employment.
     * @example
     * // Update one Employment
     * const employment = await prisma.employment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmploymentUpdateArgs>(
      args: SelectSubset<T, EmploymentUpdateArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Delete zero or more Employments.
     * @param {EmploymentDeleteManyArgs} args - Arguments to filter Employments to delete.
     * @example
     * // Delete a few Employments
     * const { count } = await prisma.employment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmploymentDeleteManyArgs>(
      args?: SelectSubset<T, EmploymentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employments
     * const employment = await prisma.employment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmploymentUpdateManyArgs>(
      args: SelectSubset<T, EmploymentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Employment.
     * @param {EmploymentUpsertArgs} args - Arguments to update or create a Employment.
     * @example
     * // Update or create a Employment
     * const employment = await prisma.employment.upsert({
     *   create: {
     *     // ... data to create a Employment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employment we want to update
     *   }
     * })
    **/
    upsert<T extends EmploymentUpsertArgs>(
      args: SelectSubset<T, EmploymentUpsertArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Find zero or more Employments that matches the filter.
     * @param {EmploymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const employment = await prisma.employment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EmploymentFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Employment.
     * @param {EmploymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const employment = await prisma.employment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EmploymentAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Employment that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EmploymentFindUniqueOrThrowArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmploymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmploymentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Find the first Employment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentFindFirstOrThrowArgs} args - Arguments to find a Employment
     * @example
     * // Get one Employment
     * const employment = await prisma.employment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmploymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmploymentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EmploymentClient<Employment>, Prisma__EmploymentClient<EmploymentGetPayload<T>>>

    /**
     * Count the number of Employments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentCountArgs} args - Arguments to filter Employments to count.
     * @example
     * // Count the number of Employments
     * const count = await prisma.employment.count({
     *   where: {
     *     // ... the filter for the Employments we want to count
     *   }
     * })
    **/
    count<T extends EmploymentCountArgs>(
      args?: Subset<T, EmploymentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmploymentAggregateArgs>(args: Subset<T, EmploymentAggregateArgs>): PrismaPromise<GetEmploymentAggregateType<T>>

    /**
     * Group by Employment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmploymentGroupByArgs['orderBy'] }
        : { orderBy?: EmploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmploymentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmploymentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    positions<T extends PositionFindManyArgs = {}>(args?: Subset<T, PositionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Position>>, PrismaPromise<Array<PositionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
   * Employment base type for findUnique actions
   */
  export type EmploymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * Filter, which Employment to fetch.
     * 
    **/
    where: EmploymentWhereUniqueInput
  }

  /**
   * Employment: findUnique
   */
  export interface EmploymentFindUniqueArgs extends EmploymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employment base type for findFirst actions
   */
  export type EmploymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * Filter, which Employment to fetch.
     * 
    **/
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     * 
    **/
    orderBy?: Enumerable<EmploymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employments.
     * 
    **/
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employments.
     * 
    **/
    distinct?: Enumerable<EmploymentScalarFieldEnum>
  }

  /**
   * Employment: findFirst
   */
  export interface EmploymentFindFirstArgs extends EmploymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employment findMany
   */
  export type EmploymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * Filter, which Employments to fetch.
     * 
    **/
    where?: EmploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employments to fetch.
     * 
    **/
    orderBy?: Enumerable<EmploymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employments.
     * 
    **/
    cursor?: EmploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmploymentScalarFieldEnum>
  }


  /**
   * Employment create
   */
  export type EmploymentCreateArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * The data needed to create a Employment.
     * 
    **/
    data: XOR<EmploymentCreateInput, EmploymentUncheckedCreateInput>
  }


  /**
   * Employment createMany
   */
  export type EmploymentCreateManyArgs = {
    /**
     * The data used to create many Employments.
     * 
    **/
    data: Enumerable<EmploymentCreateManyInput>
  }


  /**
   * Employment update
   */
  export type EmploymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * The data needed to update a Employment.
     * 
    **/
    data: XOR<EmploymentUpdateInput, EmploymentUncheckedUpdateInput>
    /**
     * Choose, which Employment to update.
     * 
    **/
    where: EmploymentWhereUniqueInput
  }


  /**
   * Employment updateMany
   */
  export type EmploymentUpdateManyArgs = {
    /**
     * The data used to update Employments.
     * 
    **/
    data: XOR<EmploymentUpdateManyMutationInput, EmploymentUncheckedUpdateManyInput>
    /**
     * Filter which Employments to update
     * 
    **/
    where?: EmploymentWhereInput
  }


  /**
   * Employment upsert
   */
  export type EmploymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * The filter to search for the Employment to update in case it exists.
     * 
    **/
    where: EmploymentWhereUniqueInput
    /**
     * In case the Employment found by the `where` argument doesn't exist, create a new Employment with this data.
     * 
    **/
    create: XOR<EmploymentCreateInput, EmploymentUncheckedCreateInput>
    /**
     * In case the Employment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmploymentUpdateInput, EmploymentUncheckedUpdateInput>
  }


  /**
   * Employment delete
   */
  export type EmploymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
    /**
     * Filter which Employment to delete.
     * 
    **/
    where: EmploymentWhereUniqueInput
  }


  /**
   * Employment deleteMany
   */
  export type EmploymentDeleteManyArgs = {
    /**
     * Filter which Employments to delete
     * 
    **/
    where?: EmploymentWhereInput
  }


  /**
   * Employment findRaw
   */
  export type EmploymentFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Employment aggregateRaw
   */
  export type EmploymentAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Employment: findUniqueOrThrow
   */
  export type EmploymentFindUniqueOrThrowArgs = EmploymentFindUniqueArgsBase
      

  /**
   * Employment: findFirstOrThrow
   */
  export type EmploymentFindFirstOrThrowArgs = EmploymentFindFirstArgsBase
      

  /**
   * Employment without action
   */
  export type EmploymentArgs = {
    /**
     * Select specific fields to fetch from the Employment
     * 
    **/
    select?: EmploymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmploymentInclude | null
  }



  /**
   * Model Position
   */


  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    index: number | null
  }

  export type PositionSumAggregateOutputType = {
    index: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    title: string | null
    employmentId: string | null
    start: Date | null
    end: Date | null
    index: number | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    employmentId: string | null
    start: Date | null
    end: Date | null
    index: number | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    title: number
    employmentId: number
    start: number
    end: number
    details: number
    technologies: number
    index: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    index?: true
  }

  export type PositionSumAggregateInputType = {
    index?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    title?: true
    employmentId?: true
    start?: true
    end?: true
    index?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    title?: true
    employmentId?: true
    start?: true
    end?: true
    index?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    title?: true
    employmentId?: true
    start?: true
    end?: true
    details?: true
    technologies?: true
    index?: true
    _all?: true
  }

  export type PositionAggregateArgs = {
    /**
     * Filter which Position to aggregate.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs = {
    where?: PositionWhereInput
    orderBy?: Enumerable<PositionOrderByWithAggregationInput>
    by: Array<PositionScalarFieldEnum>
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }


  export type PositionGroupByOutputType = {
    id: string
    title: string | null
    employmentId: string
    start: Date | null
    end: Date | null
    details: string[]
    technologies: string[]
    index: number | null
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect = {
    id?: boolean
    title?: boolean
    employment?: boolean | EmploymentArgs
    employmentId?: boolean
    start?: boolean
    end?: boolean
    details?: boolean
    technologies?: boolean
    index?: boolean
  }

  export type PositionInclude = {
    employment?: boolean | EmploymentArgs
  }

  export type PositionGetPayload<
    S extends boolean | null | undefined | PositionArgs,
    U = keyof S
      > = S extends true
        ? Position
    : S extends undefined
    ? never
    : S extends PositionArgs | PositionFindManyArgs
    ?'include' extends U
    ? Position  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employment' ? EmploymentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employment' ? EmploymentGetPayload<S['select'][P]> :  P extends keyof Position ? Position[P] : never
  } 
    : Position
  : Position


  type PositionCountArgs = Merge<
    Omit<PositionFindManyArgs, 'select' | 'include'> & {
      select?: PositionCountAggregateInputType | true
    }
  >

  export interface PositionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PositionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Position'> extends True ? CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>> : CheckSelect<T, Prisma__PositionClient<Position | null >, Prisma__PositionClient<PositionGetPayload<T> | null >>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PositionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Position'> extends True ? CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>> : CheckSelect<T, Prisma__PositionClient<Position | null >, Prisma__PositionClient<PositionGetPayload<T> | null >>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionFindManyArgs>(
      args?: SelectSubset<T, PositionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Position>>, PrismaPromise<Array<PositionGetPayload<T>>>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
    **/
    create<T extends PositionCreateArgs>(
      args: SelectSubset<T, PositionCreateArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Create many Positions.
     *     @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const position = await prisma.position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionCreateManyArgs>(
      args?: SelectSubset<T, PositionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
    **/
    delete<T extends PositionDeleteArgs>(
      args: SelectSubset<T, PositionDeleteArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionUpdateArgs>(
      args: SelectSubset<T, PositionUpdateArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionDeleteManyArgs>(
      args?: SelectSubset<T, PositionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionUpdateManyArgs>(
      args: SelectSubset<T, PositionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
    **/
    upsert<T extends PositionUpsertArgs>(
      args: SelectSubset<T, PositionUpsertArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Find zero or more Positions that matches the filter.
     * @param {PositionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const position = await prisma.position.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PositionFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Position.
     * @param {PositionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const position = await prisma.position.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PositionAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Position that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PositionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Find the first Position that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PositionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PositionClient<Position>, Prisma__PositionClient<PositionGetPayload<T>>>

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PositionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employment<T extends EmploymentArgs = {}>(args?: Subset<T, EmploymentArgs>): CheckSelect<T, Prisma__EmploymentClient<Employment | null >, Prisma__EmploymentClient<EmploymentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
   * Position base type for findUnique actions
   */
  export type PositionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where: PositionWhereUniqueInput
  }

  /**
   * Position: findUnique
   */
  export interface PositionFindUniqueArgs extends PositionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position base type for findFirst actions
   */
  export type PositionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     * 
    **/
    distinct?: Enumerable<PositionScalarFieldEnum>
  }

  /**
   * Position: findFirst
   */
  export interface PositionFindFirstArgs extends PositionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position findMany
   */
  export type PositionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Positions to fetch.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PositionScalarFieldEnum>
  }


  /**
   * Position create
   */
  export type PositionCreateArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The data needed to create a Position.
     * 
    **/
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }


  /**
   * Position createMany
   */
  export type PositionCreateManyArgs = {
    /**
     * The data used to create many Positions.
     * 
    **/
    data: Enumerable<PositionCreateManyInput>
  }


  /**
   * Position update
   */
  export type PositionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The data needed to update a Position.
     * 
    **/
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     * 
    **/
    where: PositionWhereUniqueInput
  }


  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs = {
    /**
     * The data used to update Positions.
     * 
    **/
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     * 
    **/
    where?: PositionWhereInput
  }


  /**
   * Position upsert
   */
  export type PositionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The filter to search for the Position to update in case it exists.
     * 
    **/
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     * 
    **/
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }


  /**
   * Position delete
   */
  export type PositionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter which Position to delete.
     * 
    **/
    where: PositionWhereUniqueInput
  }


  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs = {
    /**
     * Filter which Positions to delete
     * 
    **/
    where?: PositionWhereInput
  }


  /**
   * Position findRaw
   */
  export type PositionFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Position aggregateRaw
   */
  export type PositionAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Position: findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs = PositionFindUniqueArgsBase
      

  /**
   * Position: findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs = PositionFindFirstArgsBase
      

  /**
   * Position without action
   */
  export type PositionArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
  }



  /**
   * Model Education
   */


  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    end: Date | null
    description: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    end: Date | null
    description: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    title: number
    link: number
    end: number
    description: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    end?: true
    description?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    end?: true
    description?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    end?: true
    description?: true
    _all?: true
  }

  export type EducationAggregateArgs = {
    /**
     * Filter which Education to aggregate.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs = {
    where?: EducationWhereInput
    orderBy?: Enumerable<EducationOrderByWithAggregationInput>
    by: Array<EducationScalarFieldEnum>
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }


  export type EducationGroupByOutputType = {
    id: string
    title: string | null
    link: string | null
    end: Date | null
    description: string | null
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect = {
    id?: boolean
    title?: boolean
    link?: boolean
    end?: boolean
    description?: boolean
  }

  export type EducationGetPayload<
    S extends boolean | null | undefined | EducationArgs,
    U = keyof S
      > = S extends true
        ? Education
    : S extends undefined
    ? never
    : S extends EducationArgs | EducationFindManyArgs
    ?'include' extends U
    ? Education 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Education ? Education[P] : never
  } 
    : Education
  : Education


  type EducationCountArgs = Merge<
    Omit<EducationFindManyArgs, 'select' | 'include'> & {
      select?: EducationCountAggregateInputType | true
    }
  >

  export interface EducationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EducationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EducationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Education'> extends True ? CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>> : CheckSelect<T, Prisma__EducationClient<Education | null >, Prisma__EducationClient<EducationGetPayload<T> | null >>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EducationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EducationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Education'> extends True ? CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>> : CheckSelect<T, Prisma__EducationClient<Education | null >, Prisma__EducationClient<EducationGetPayload<T> | null >>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EducationFindManyArgs>(
      args?: SelectSubset<T, EducationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Education>>, PrismaPromise<Array<EducationGetPayload<T>>>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
    **/
    create<T extends EducationCreateArgs>(
      args: SelectSubset<T, EducationCreateArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Create many Educations.
     *     @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     *     @example
     *     // Create many Educations
     *     const education = await prisma.education.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EducationCreateManyArgs>(
      args?: SelectSubset<T, EducationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
    **/
    delete<T extends EducationDeleteArgs>(
      args: SelectSubset<T, EducationDeleteArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EducationUpdateArgs>(
      args: SelectSubset<T, EducationUpdateArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EducationDeleteManyArgs>(
      args?: SelectSubset<T, EducationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EducationUpdateManyArgs>(
      args: SelectSubset<T, EducationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
    **/
    upsert<T extends EducationUpsertArgs>(
      args: SelectSubset<T, EducationUpsertArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Find zero or more Educations that matches the filter.
     * @param {EducationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const education = await prisma.education.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EducationFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Education.
     * @param {EducationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const education = await prisma.education.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EducationAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Education that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EducationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Find the first Education that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EducationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EducationClient<Education>, Prisma__EducationClient<EducationGetPayload<T>>>

    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EducationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
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
   * Education base type for findUnique actions
   */
  export type EducationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where: EducationWhereUniqueInput
  }

  /**
   * Education: findUnique
   */
  export interface EducationFindUniqueArgs extends EducationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Education base type for findFirst actions
   */
  export type EducationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     * 
    **/
    distinct?: Enumerable<EducationScalarFieldEnum>
  }

  /**
   * Education: findFirst
   */
  export interface EducationFindFirstArgs extends EducationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Education findMany
   */
  export type EducationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Filter, which Educations to fetch.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EducationScalarFieldEnum>
  }


  /**
   * Education create
   */
  export type EducationCreateArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * The data needed to create a Education.
     * 
    **/
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }


  /**
   * Education createMany
   */
  export type EducationCreateManyArgs = {
    /**
     * The data used to create many Educations.
     * 
    **/
    data: Enumerable<EducationCreateManyInput>
  }


  /**
   * Education update
   */
  export type EducationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * The data needed to update a Education.
     * 
    **/
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     * 
    **/
    where: EducationWhereUniqueInput
  }


  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs = {
    /**
     * The data used to update Educations.
     * 
    **/
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     * 
    **/
    where?: EducationWhereInput
  }


  /**
   * Education upsert
   */
  export type EducationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * The filter to search for the Education to update in case it exists.
     * 
    **/
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     * 
    **/
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }


  /**
   * Education delete
   */
  export type EducationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Filter which Education to delete.
     * 
    **/
    where: EducationWhereUniqueInput
  }


  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs = {
    /**
     * Filter which Educations to delete
     * 
    **/
    where?: EducationWhereInput
  }


  /**
   * Education findRaw
   */
  export type EducationFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Education aggregateRaw
   */
  export type EducationAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Education: findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs = EducationFindUniqueArgsBase
      

  /**
   * Education: findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs = EducationFindFirstArgsBase
      

  /**
   * Education without action
   */
  export type EducationArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const EducationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    end: 'end',
    description: 'description'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const EmploymentScalarFieldEnum: {
    id: 'id',
    company: 'company',
    companyLink: 'companyLink',
    descriptor: 'descriptor',
    index: 'index'
  };

  export type EmploymentScalarFieldEnum = (typeof EmploymentScalarFieldEnum)[keyof typeof EmploymentScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    employmentId: 'employmentId',
    start: 'start',
    end: 'end',
    details: 'details',
    technologies: 'technologies',
    index: 'index'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type EmploymentWhereInput = {
    AND?: Enumerable<EmploymentWhereInput>
    OR?: Enumerable<EmploymentWhereInput>
    NOT?: Enumerable<EmploymentWhereInput>
    id?: StringFilter | string
    company?: StringNullableFilter | string | null
    companyLink?: StringNullableFilter | string | null
    descriptor?: StringNullableFilter | string | null
    positions?: PositionListRelationFilter
    index?: IntNullableFilter | number | null
  }

  export type EmploymentOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    companyLink?: SortOrder
    descriptor?: SortOrder
    positions?: PositionOrderByRelationAggregateInput
    index?: SortOrder
  }

  export type EmploymentWhereUniqueInput = {
    id?: string
  }

  export type EmploymentOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    companyLink?: SortOrder
    descriptor?: SortOrder
    index?: SortOrder
    _count?: EmploymentCountOrderByAggregateInput
    _avg?: EmploymentAvgOrderByAggregateInput
    _max?: EmploymentMaxOrderByAggregateInput
    _min?: EmploymentMinOrderByAggregateInput
    _sum?: EmploymentSumOrderByAggregateInput
  }

  export type EmploymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmploymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmploymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmploymentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company?: StringNullableWithAggregatesFilter | string | null
    companyLink?: StringNullableWithAggregatesFilter | string | null
    descriptor?: StringNullableWithAggregatesFilter | string | null
    index?: IntNullableWithAggregatesFilter | number | null
  }

  export type PositionWhereInput = {
    AND?: Enumerable<PositionWhereInput>
    OR?: Enumerable<PositionWhereInput>
    NOT?: Enumerable<PositionWhereInput>
    id?: StringFilter | string
    title?: StringNullableFilter | string | null
    employment?: XOR<EmploymentRelationFilter, EmploymentWhereInput>
    employmentId?: StringFilter | string
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    details?: StringNullableListFilter
    technologies?: StringNullableListFilter
    index?: IntNullableFilter | number | null
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    employment?: EmploymentOrderByWithRelationInput
    employmentId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    details?: SortOrder
    technologies?: SortOrder
    index?: SortOrder
  }

  export type PositionWhereUniqueInput = {
    id?: string
  }

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    employmentId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    details?: SortOrder
    technologies?: SortOrder
    index?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PositionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PositionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PositionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    employmentId?: StringWithAggregatesFilter | string
    start?: DateTimeNullableWithAggregatesFilter | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    details?: StringNullableListFilter
    technologies?: StringNullableListFilter
    index?: IntNullableWithAggregatesFilter | number | null
  }

  export type EducationWhereInput = {
    AND?: Enumerable<EducationWhereInput>
    OR?: Enumerable<EducationWhereInput>
    NOT?: Enumerable<EducationWhereInput>
    id?: StringFilter | string
    title?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    end?: DateTimeNullableFilter | Date | string | null
    description?: StringNullableFilter | string | null
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    end?: SortOrder
    description?: SortOrder
  }

  export type EducationWhereUniqueInput = {
    id?: string
  }

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    end?: SortOrder
    description?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EducationScalarWhereWithAggregatesInput>
    OR?: Enumerable<EducationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EducationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type EmploymentCreateInput = {
    id?: string
    company?: string | null
    companyLink?: string | null
    descriptor?: string | null
    positions?: PositionCreateNestedManyWithoutEmploymentInput
    index?: number | null
  }

  export type EmploymentUncheckedCreateInput = {
    id?: string
    company?: string | null
    companyLink?: string | null
    descriptor?: string | null
    positions?: PositionUncheckedCreateNestedManyWithoutEmploymentInput
    index?: number | null
  }

  export type EmploymentUpdateInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: PositionUpdateManyWithoutEmploymentNestedInput
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmploymentUncheckedUpdateInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: PositionUncheckedUpdateManyWithoutEmploymentNestedInput
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmploymentCreateManyInput = {
    id?: string
    company?: string | null
    companyLink?: string | null
    descriptor?: string | null
    index?: number | null
  }

  export type EmploymentUpdateManyMutationInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmploymentUncheckedUpdateManyInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionCreateInput = {
    id?: string
    title?: string | null
    employment: EmploymentCreateNestedOneWithoutPositionsInput
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    title?: string | null
    employmentId: string
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: EmploymentUpdateOneRequiredWithoutPositionsNestedInput
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionUncheckedUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    employmentId?: StringFieldUpdateOperationsInput | string
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionCreateManyInput = {
    id?: string
    title?: string | null
    employmentId: string
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionUncheckedUpdateManyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    employmentId?: StringFieldUpdateOperationsInput | string
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EducationCreateInput = {
    id?: string
    title?: string | null
    link?: string | null
    end?: Date | string | null
    description?: string | null
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    title?: string | null
    link?: string | null
    end?: Date | string | null
    description?: string | null
  }

  export type EducationUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateManyInput = {
    id?: string
    title?: string | null
    link?: string | null
    end?: Date | string | null
    description?: string | null
  }

  export type EducationUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
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
    not?: NestedStringFilter | string
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
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmploymentCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    companyLink?: SortOrder
    descriptor?: SortOrder
    index?: SortOrder
  }

  export type EmploymentAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type EmploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    companyLink?: SortOrder
    descriptor?: SortOrder
    index?: SortOrder
  }

  export type EmploymentMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    companyLink?: SortOrder
    descriptor?: SortOrder
    index?: SortOrder
  }

  export type EmploymentSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type StringWithAggregatesFilter = {
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
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
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
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type EmploymentRelationFilter = {
    is?: EmploymentWhereInput
    isNot?: EmploymentWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    details?: SortOrder
    technologies?: SortOrder
    index?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    index?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    index?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    end?: SortOrder
    description?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    end?: SortOrder
    description?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    end?: SortOrder
    description?: SortOrder
  }

  export type PositionCreateNestedManyWithoutEmploymentInput = {
    create?: XOR<Enumerable<PositionCreateWithoutEmploymentInput>, Enumerable<PositionUncheckedCreateWithoutEmploymentInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutEmploymentInput>
    createMany?: PositionCreateManyEmploymentInputEnvelope
    connect?: Enumerable<PositionWhereUniqueInput>
  }

  export type PositionUncheckedCreateNestedManyWithoutEmploymentInput = {
    create?: XOR<Enumerable<PositionCreateWithoutEmploymentInput>, Enumerable<PositionUncheckedCreateWithoutEmploymentInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutEmploymentInput>
    createMany?: PositionCreateManyEmploymentInputEnvelope
    connect?: Enumerable<PositionWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type PositionUpdateManyWithoutEmploymentNestedInput = {
    create?: XOR<Enumerable<PositionCreateWithoutEmploymentInput>, Enumerable<PositionUncheckedCreateWithoutEmploymentInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutEmploymentInput>
    upsert?: Enumerable<PositionUpsertWithWhereUniqueWithoutEmploymentInput>
    createMany?: PositionCreateManyEmploymentInputEnvelope
    set?: Enumerable<PositionWhereUniqueInput>
    disconnect?: Enumerable<PositionWhereUniqueInput>
    delete?: Enumerable<PositionWhereUniqueInput>
    connect?: Enumerable<PositionWhereUniqueInput>
    update?: Enumerable<PositionUpdateWithWhereUniqueWithoutEmploymentInput>
    updateMany?: Enumerable<PositionUpdateManyWithWhereWithoutEmploymentInput>
    deleteMany?: Enumerable<PositionScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type PositionUncheckedUpdateManyWithoutEmploymentNestedInput = {
    create?: XOR<Enumerable<PositionCreateWithoutEmploymentInput>, Enumerable<PositionUncheckedCreateWithoutEmploymentInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutEmploymentInput>
    upsert?: Enumerable<PositionUpsertWithWhereUniqueWithoutEmploymentInput>
    createMany?: PositionCreateManyEmploymentInputEnvelope
    set?: Enumerable<PositionWhereUniqueInput>
    disconnect?: Enumerable<PositionWhereUniqueInput>
    delete?: Enumerable<PositionWhereUniqueInput>
    connect?: Enumerable<PositionWhereUniqueInput>
    update?: Enumerable<PositionUpdateWithWhereUniqueWithoutEmploymentInput>
    updateMany?: Enumerable<PositionUpdateManyWithWhereWithoutEmploymentInput>
    deleteMany?: Enumerable<PositionScalarWhereInput>
  }

  export type EmploymentCreateNestedOneWithoutPositionsInput = {
    create?: XOR<EmploymentCreateWithoutPositionsInput, EmploymentUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: EmploymentCreateOrConnectWithoutPositionsInput
    connect?: EmploymentWhereUniqueInput
  }

  export type PositionCreatedetailsInput = {
    set: Enumerable<string>
  }

  export type PositionCreatetechnologiesInput = {
    set: Enumerable<string>
  }

  export type EmploymentUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<EmploymentCreateWithoutPositionsInput, EmploymentUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: EmploymentCreateOrConnectWithoutPositionsInput
    upsert?: EmploymentUpsertWithoutPositionsInput
    connect?: EmploymentWhereUniqueInput
    update?: XOR<EmploymentUpdateWithoutPositionsInput, EmploymentUncheckedUpdateWithoutPositionsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type PositionUpdatedetailsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type PositionUpdatetechnologiesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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
    not?: NestedStringFilter | string
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
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
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
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
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
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type PositionCreateWithoutEmploymentInput = {
    id?: string
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionUncheckedCreateWithoutEmploymentInput = {
    id?: string
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionCreateOrConnectWithoutEmploymentInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutEmploymentInput, PositionUncheckedCreateWithoutEmploymentInput>
  }

  export type PositionCreateManyEmploymentInputEnvelope = {
    data: Enumerable<PositionCreateManyEmploymentInput>
  }

  export type PositionUpsertWithWhereUniqueWithoutEmploymentInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutEmploymentInput, PositionUncheckedUpdateWithoutEmploymentInput>
    create: XOR<PositionCreateWithoutEmploymentInput, PositionUncheckedCreateWithoutEmploymentInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutEmploymentInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutEmploymentInput, PositionUncheckedUpdateWithoutEmploymentInput>
  }

  export type PositionUpdateManyWithWhereWithoutEmploymentInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutPositionsInput>
  }

  export type PositionScalarWhereInput = {
    AND?: Enumerable<PositionScalarWhereInput>
    OR?: Enumerable<PositionScalarWhereInput>
    NOT?: Enumerable<PositionScalarWhereInput>
    id?: StringFilter | string
    title?: StringNullableFilter | string | null
    employmentId?: StringFilter | string
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    details?: StringNullableListFilter
    technologies?: StringNullableListFilter
    index?: IntNullableFilter | number | null
  }

  export type EmploymentCreateWithoutPositionsInput = {
    id?: string
    company?: string | null
    companyLink?: string | null
    descriptor?: string | null
    index?: number | null
  }

  export type EmploymentUncheckedCreateWithoutPositionsInput = {
    id?: string
    company?: string | null
    companyLink?: string | null
    descriptor?: string | null
    index?: number | null
  }

  export type EmploymentCreateOrConnectWithoutPositionsInput = {
    where: EmploymentWhereUniqueInput
    create: XOR<EmploymentCreateWithoutPositionsInput, EmploymentUncheckedCreateWithoutPositionsInput>
  }

  export type EmploymentUpsertWithoutPositionsInput = {
    update: XOR<EmploymentUpdateWithoutPositionsInput, EmploymentUncheckedUpdateWithoutPositionsInput>
    create: XOR<EmploymentCreateWithoutPositionsInput, EmploymentUncheckedCreateWithoutPositionsInput>
  }

  export type EmploymentUpdateWithoutPositionsInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmploymentUncheckedUpdateWithoutPositionsInput = {
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyLink?: NullableStringFieldUpdateOperationsInput | string | null
    descriptor?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionCreateManyEmploymentInput = {
    id?: string
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    details?: PositionCreatedetailsInput | Enumerable<string>
    technologies?: PositionCreatetechnologiesInput | Enumerable<string>
    index?: number | null
  }

  export type PositionUpdateWithoutEmploymentInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionUncheckedUpdateWithoutEmploymentInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionUncheckedUpdateManyWithoutPositionsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: PositionUpdatedetailsInput | Enumerable<string>
    technologies?: PositionUpdatetechnologiesInput | Enumerable<string>
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}