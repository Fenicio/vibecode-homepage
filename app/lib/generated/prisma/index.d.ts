
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model glossary
 * 
 */
export type glossary = $Result.DefaultSelection<Prisma.$glossaryPayload>
/**
 * Model related_glossary_terms
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type related_glossary_terms = $Result.DefaultSelection<Prisma.$related_glossary_termsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model success_stories
 * 
 */
export type success_stories = $Result.DefaultSelection<Prisma.$success_storiesPayload>
/**
 * Model success_story_tools
 * 
 */
export type success_story_tools = $Result.DefaultSelection<Prisma.$success_story_toolsPayload>
/**
 * Model tools
 * 
 */
export type tools = $Result.DefaultSelection<Prisma.$toolsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model verification_token
 * 
 */
export type verification_token = $Result.DefaultSelection<Prisma.$verification_tokenPayload>
/**
 * Model vibe_tools
 * 
 */
export type vibe_tools = $Result.DefaultSelection<Prisma.$vibe_toolsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossary`: Exposes CRUD operations for the **glossary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Glossaries
    * const glossaries = await prisma.glossary.findMany()
    * ```
    */
  get glossary(): Prisma.glossaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.related_glossary_terms`: Exposes CRUD operations for the **related_glossary_terms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Related_glossary_terms
    * const related_glossary_terms = await prisma.related_glossary_terms.findMany()
    * ```
    */
  get related_glossary_terms(): Prisma.related_glossary_termsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.success_stories`: Exposes CRUD operations for the **success_stories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Success_stories
    * const success_stories = await prisma.success_stories.findMany()
    * ```
    */
  get success_stories(): Prisma.success_storiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.success_story_tools`: Exposes CRUD operations for the **success_story_tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Success_story_tools
    * const success_story_tools = await prisma.success_story_tools.findMany()
    * ```
    */
  get success_story_tools(): Prisma.success_story_toolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tools`: Exposes CRUD operations for the **tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tools.findMany()
    * ```
    */
  get tools(): Prisma.toolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification_token`: Exposes CRUD operations for the **verification_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verification_tokens
    * const verification_tokens = await prisma.verification_token.findMany()
    * ```
    */
  get verification_token(): Prisma.verification_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vibe_tools`: Exposes CRUD operations for the **vibe_tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vibe_tools
    * const vibe_tools = await prisma.vibe_tools.findMany()
    * ```
    */
  get vibe_tools(): Prisma.vibe_toolsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    accounts: 'accounts',
    comments: 'comments',
    glossary: 'glossary',
    related_glossary_terms: 'related_glossary_terms',
    sessions: 'sessions',
    success_stories: 'success_stories',
    success_story_tools: 'success_story_tools',
    tools: 'tools',
    users: 'users',
    verification_token: 'verification_token',
    vibe_tools: 'vibe_tools'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accounts" | "comments" | "glossary" | "related_glossary_terms" | "sessions" | "success_stories" | "success_story_tools" | "tools" | "users" | "verification_token" | "vibe_tools"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      glossary: {
        payload: Prisma.$glossaryPayload<ExtArgs>
        fields: Prisma.glossaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.glossaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.glossaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          findFirst: {
            args: Prisma.glossaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.glossaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          findMany: {
            args: Prisma.glossaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>[]
          }
          create: {
            args: Prisma.glossaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          createMany: {
            args: Prisma.glossaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.glossaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>[]
          }
          delete: {
            args: Prisma.glossaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          update: {
            args: Prisma.glossaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          deleteMany: {
            args: Prisma.glossaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.glossaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.glossaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>[]
          }
          upsert: {
            args: Prisma.glossaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$glossaryPayload>
          }
          aggregate: {
            args: Prisma.GlossaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossary>
          }
          groupBy: {
            args: Prisma.glossaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.glossaryCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryCountAggregateOutputType> | number
          }
        }
      }
      related_glossary_terms: {
        payload: Prisma.$related_glossary_termsPayload<ExtArgs>
        fields: Prisma.related_glossary_termsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.related_glossary_termsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.related_glossary_termsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          findFirst: {
            args: Prisma.related_glossary_termsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.related_glossary_termsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          findMany: {
            args: Prisma.related_glossary_termsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>[]
          }
          create: {
            args: Prisma.related_glossary_termsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          createMany: {
            args: Prisma.related_glossary_termsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.related_glossary_termsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>[]
          }
          delete: {
            args: Prisma.related_glossary_termsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          update: {
            args: Prisma.related_glossary_termsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          deleteMany: {
            args: Prisma.related_glossary_termsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.related_glossary_termsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.related_glossary_termsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>[]
          }
          upsert: {
            args: Prisma.related_glossary_termsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$related_glossary_termsPayload>
          }
          aggregate: {
            args: Prisma.Related_glossary_termsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelated_glossary_terms>
          }
          groupBy: {
            args: Prisma.related_glossary_termsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Related_glossary_termsGroupByOutputType>[]
          }
          count: {
            args: Prisma.related_glossary_termsCountArgs<ExtArgs>
            result: $Utils.Optional<Related_glossary_termsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      success_stories: {
        payload: Prisma.$success_storiesPayload<ExtArgs>
        fields: Prisma.success_storiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.success_storiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.success_storiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          findFirst: {
            args: Prisma.success_storiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.success_storiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          findMany: {
            args: Prisma.success_storiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>[]
          }
          create: {
            args: Prisma.success_storiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          createMany: {
            args: Prisma.success_storiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.success_storiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>[]
          }
          delete: {
            args: Prisma.success_storiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          update: {
            args: Prisma.success_storiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          deleteMany: {
            args: Prisma.success_storiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.success_storiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.success_storiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>[]
          }
          upsert: {
            args: Prisma.success_storiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_storiesPayload>
          }
          aggregate: {
            args: Prisma.Success_storiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccess_stories>
          }
          groupBy: {
            args: Prisma.success_storiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Success_storiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.success_storiesCountArgs<ExtArgs>
            result: $Utils.Optional<Success_storiesCountAggregateOutputType> | number
          }
        }
      }
      success_story_tools: {
        payload: Prisma.$success_story_toolsPayload<ExtArgs>
        fields: Prisma.success_story_toolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.success_story_toolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.success_story_toolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          findFirst: {
            args: Prisma.success_story_toolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.success_story_toolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          findMany: {
            args: Prisma.success_story_toolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>[]
          }
          create: {
            args: Prisma.success_story_toolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          createMany: {
            args: Prisma.success_story_toolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.success_story_toolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>[]
          }
          delete: {
            args: Prisma.success_story_toolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          update: {
            args: Prisma.success_story_toolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          deleteMany: {
            args: Prisma.success_story_toolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.success_story_toolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.success_story_toolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>[]
          }
          upsert: {
            args: Prisma.success_story_toolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$success_story_toolsPayload>
          }
          aggregate: {
            args: Prisma.Success_story_toolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccess_story_tools>
          }
          groupBy: {
            args: Prisma.success_story_toolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Success_story_toolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.success_story_toolsCountArgs<ExtArgs>
            result: $Utils.Optional<Success_story_toolsCountAggregateOutputType> | number
          }
        }
      }
      tools: {
        payload: Prisma.$toolsPayload<ExtArgs>
        fields: Prisma.toolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.toolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.toolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          findFirst: {
            args: Prisma.toolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.toolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          findMany: {
            args: Prisma.toolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          create: {
            args: Prisma.toolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          createMany: {
            args: Prisma.toolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.toolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          delete: {
            args: Prisma.toolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          update: {
            args: Prisma.toolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          deleteMany: {
            args: Prisma.toolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.toolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.toolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          upsert: {
            args: Prisma.toolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          aggregate: {
            args: Prisma.ToolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTools>
          }
          groupBy: {
            args: Prisma.toolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.toolsCountArgs<ExtArgs>
            result: $Utils.Optional<ToolsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      verification_token: {
        payload: Prisma.$verification_tokenPayload<ExtArgs>
        fields: Prisma.verification_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verification_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verification_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          findFirst: {
            args: Prisma.verification_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verification_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          findMany: {
            args: Prisma.verification_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>[]
          }
          create: {
            args: Prisma.verification_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          createMany: {
            args: Prisma.verification_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verification_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>[]
          }
          delete: {
            args: Prisma.verification_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          update: {
            args: Prisma.verification_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          deleteMany: {
            args: Prisma.verification_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verification_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verification_tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>[]
          }
          upsert: {
            args: Prisma.verification_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          aggregate: {
            args: Prisma.Verification_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification_token>
          }
          groupBy: {
            args: Prisma.verification_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verification_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.verification_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Verification_tokenCountAggregateOutputType> | number
          }
        }
      }
      vibe_tools: {
        payload: Prisma.$vibe_toolsPayload<ExtArgs>
        fields: Prisma.vibe_toolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vibe_toolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vibe_toolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          findFirst: {
            args: Prisma.vibe_toolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vibe_toolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          findMany: {
            args: Prisma.vibe_toolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>[]
          }
          create: {
            args: Prisma.vibe_toolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          createMany: {
            args: Prisma.vibe_toolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vibe_toolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>[]
          }
          delete: {
            args: Prisma.vibe_toolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          update: {
            args: Prisma.vibe_toolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          deleteMany: {
            args: Prisma.vibe_toolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vibe_toolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vibe_toolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>[]
          }
          upsert: {
            args: Prisma.vibe_toolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vibe_toolsPayload>
          }
          aggregate: {
            args: Prisma.Vibe_toolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVibe_tools>
          }
          groupBy: {
            args: Prisma.vibe_toolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vibe_toolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vibe_toolsCountArgs<ExtArgs>
            result: $Utils.Optional<Vibe_toolsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    accounts?: accountsOmit
    comments?: commentsOmit
    glossary?: glossaryOmit
    related_glossary_terms?: related_glossary_termsOmit
    sessions?: sessionsOmit
    success_stories?: success_storiesOmit
    success_story_tools?: success_story_toolsOmit
    tools?: toolsOmit
    users?: usersOmit
    verification_token?: verification_tokenOmit
    vibe_tools?: vibe_toolsOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GlossaryCountOutputType
   */

  export type GlossaryCountOutputType = {
    related_glossary_terms_related_glossary_terms_related_term_idToglossary: number
    related_glossary_terms_related_glossary_terms_term_idToglossary: number
  }

  export type GlossaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: boolean | GlossaryCountOutputTypeCountRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs
    related_glossary_terms_related_glossary_terms_term_idToglossary?: boolean | GlossaryCountOutputTypeCountRelated_glossary_terms_related_glossary_terms_term_idToglossaryArgs
  }

  // Custom InputTypes
  /**
   * GlossaryCountOutputType without action
   */
  export type GlossaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryCountOutputType
     */
    select?: GlossaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlossaryCountOutputType without action
   */
  export type GlossaryCountOutputTypeCountRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: related_glossary_termsWhereInput
  }

  /**
   * GlossaryCountOutputType without action
   */
  export type GlossaryCountOutputTypeCountRelated_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: related_glossary_termsWhereInput
  }


  /**
   * Count Type Success_storiesCountOutputType
   */

  export type Success_storiesCountOutputType = {
    comments: number
    success_story_tools: number
  }

  export type Success_storiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Success_storiesCountOutputTypeCountCommentsArgs
    success_story_tools?: boolean | Success_storiesCountOutputTypeCountSuccess_story_toolsArgs
  }

  // Custom InputTypes
  /**
   * Success_storiesCountOutputType without action
   */
  export type Success_storiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Success_storiesCountOutputType
     */
    select?: Success_storiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Success_storiesCountOutputType without action
   */
  export type Success_storiesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * Success_storiesCountOutputType without action
   */
  export type Success_storiesCountOutputTypeCountSuccess_story_toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: success_story_toolsWhereInput
  }


  /**
   * Count Type ToolsCountOutputType
   */

  export type ToolsCountOutputType = {
    success_story_tools: number
  }

  export type ToolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_story_tools?: boolean | ToolsCountOutputTypeCountSuccess_story_toolsArgs
  }

  // Custom InputTypes
  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolsCountOutputType
     */
    select?: ToolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeCountSuccess_story_toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: success_story_toolsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    success_stories: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    success_stories?: boolean | UsersCountOutputTypeCountSuccess_storiesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSuccess_storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: success_storiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: bigint | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    id_token: number
    scope: number
    session_state: number
    token_type: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "id_token" | "scope" | "session_state" | "token_type", ExtArgs["result"]["accounts"]>

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: bigint | null
      id_token: string | null
      scope: string | null
      session_state: string | null
      token_type: string | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'Int'>
    readonly userId: FieldRef<"accounts", 'Int'>
    readonly type: FieldRef<"accounts", 'String'>
    readonly provider: FieldRef<"accounts", 'String'>
    readonly providerAccountId: FieldRef<"accounts", 'String'>
    readonly refresh_token: FieldRef<"accounts", 'String'>
    readonly access_token: FieldRef<"accounts", 'String'>
    readonly expires_at: FieldRef<"accounts", 'BigInt'>
    readonly id_token: FieldRef<"accounts", 'String'>
    readonly scope: FieldRef<"accounts", 'String'>
    readonly session_state: FieldRef<"accounts", 'String'>
    readonly token_type: FieldRef<"accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    story_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    story_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    user_id: number | null
    story_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    user_id: number | null
    story_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    user_id: number
    story_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    story_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    user_id?: true
    story_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    story_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    story_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    story_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    content: string
    user_id: number | null
    story_id: number | null
    created_at: Date
    updated_at: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    story_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    story_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    story_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    content?: boolean
    user_id?: boolean
    story_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "user_id" | "story_id" | "created_at" | "updated_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | comments$success_storiesArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      success_stories: Prisma.$success_storiesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      user_id: number | null
      story_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    success_stories<T extends comments$success_storiesArgs<ExtArgs> = {}>(args?: Subset<T, comments$success_storiesArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly story_id: FieldRef<"comments", 'Int'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
    readonly updated_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.success_stories
   */
  export type comments$success_storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    where?: success_storiesWhereInput
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model glossary
   */

  export type AggregateGlossary = {
    _count: GlossaryCountAggregateOutputType | null
    _avg: GlossaryAvgAggregateOutputType | null
    _sum: GlossarySumAggregateOutputType | null
    _min: GlossaryMinAggregateOutputType | null
    _max: GlossaryMaxAggregateOutputType | null
  }

  export type GlossaryAvgAggregateOutputType = {
    id: number | null
  }

  export type GlossarySumAggregateOutputType = {
    id: number | null
  }

  export type GlossaryMinAggregateOutputType = {
    id: number | null
    term: string | null
    slug: string | null
    definition: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GlossaryMaxAggregateOutputType = {
    id: number | null
    term: string | null
    slug: string | null
    definition: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GlossaryCountAggregateOutputType = {
    id: number
    term: number
    slug: number
    definition: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GlossaryAvgAggregateInputType = {
    id?: true
  }

  export type GlossarySumAggregateInputType = {
    id?: true
  }

  export type GlossaryMinAggregateInputType = {
    id?: true
    term?: true
    slug?: true
    definition?: true
    created_at?: true
    updated_at?: true
  }

  export type GlossaryMaxAggregateInputType = {
    id?: true
    term?: true
    slug?: true
    definition?: true
    created_at?: true
    updated_at?: true
  }

  export type GlossaryCountAggregateInputType = {
    id?: true
    term?: true
    slug?: true
    definition?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GlossaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which glossary to aggregate.
     */
    where?: glossaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of glossaries to fetch.
     */
    orderBy?: glossaryOrderByWithRelationInput | glossaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: glossaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` glossaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` glossaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned glossaries
    **/
    _count?: true | GlossaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlossaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlossarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryMaxAggregateInputType
  }

  export type GetGlossaryAggregateType<T extends GlossaryAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossary[P]>
      : GetScalarType<T[P], AggregateGlossary[P]>
  }




  export type glossaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: glossaryWhereInput
    orderBy?: glossaryOrderByWithAggregationInput | glossaryOrderByWithAggregationInput[]
    by: GlossaryScalarFieldEnum[] | GlossaryScalarFieldEnum
    having?: glossaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryCountAggregateInputType | true
    _avg?: GlossaryAvgAggregateInputType
    _sum?: GlossarySumAggregateInputType
    _min?: GlossaryMinAggregateInputType
    _max?: GlossaryMaxAggregateInputType
  }

  export type GlossaryGroupByOutputType = {
    id: number
    term: string
    slug: string
    definition: string
    created_at: Date
    updated_at: Date
    _count: GlossaryCountAggregateOutputType | null
    _avg: GlossaryAvgAggregateOutputType | null
    _sum: GlossarySumAggregateOutputType | null
    _min: GlossaryMinAggregateOutputType | null
    _max: GlossaryMaxAggregateOutputType | null
  }

  type GetGlossaryGroupByPayload<T extends glossaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryGroupByOutputType[P]>
        }
      >
    >


  export type glossarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    slug?: boolean
    definition?: boolean
    created_at?: boolean
    updated_at?: boolean
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: boolean | glossary$related_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs>
    related_glossary_terms_related_glossary_terms_term_idToglossary?: boolean | glossary$related_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs>
    _count?: boolean | GlossaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossary"]>

  export type glossarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    slug?: boolean
    definition?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["glossary"]>

  export type glossarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    slug?: boolean
    definition?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["glossary"]>

  export type glossarySelectScalar = {
    id?: boolean
    term?: boolean
    slug?: boolean
    definition?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type glossaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "slug" | "definition" | "created_at" | "updated_at", ExtArgs["result"]["glossary"]>
  export type glossaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: boolean | glossary$related_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs>
    related_glossary_terms_related_glossary_terms_term_idToglossary?: boolean | glossary$related_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs>
    _count?: boolean | GlossaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type glossaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type glossaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $glossaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "glossary"
    objects: {
      related_glossary_terms_related_glossary_terms_related_term_idToglossary: Prisma.$related_glossary_termsPayload<ExtArgs>[]
      related_glossary_terms_related_glossary_terms_term_idToglossary: Prisma.$related_glossary_termsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      term: string
      slug: string
      definition: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["glossary"]>
    composites: {}
  }

  type glossaryGetPayload<S extends boolean | null | undefined | glossaryDefaultArgs> = $Result.GetResult<Prisma.$glossaryPayload, S>

  type glossaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<glossaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryCountAggregateInputType | true
    }

  export interface glossaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['glossary'], meta: { name: 'glossary' } }
    /**
     * Find zero or one Glossary that matches the filter.
     * @param {glossaryFindUniqueArgs} args - Arguments to find a Glossary
     * @example
     * // Get one Glossary
     * const glossary = await prisma.glossary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends glossaryFindUniqueArgs>(args: SelectSubset<T, glossaryFindUniqueArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Glossary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {glossaryFindUniqueOrThrowArgs} args - Arguments to find a Glossary
     * @example
     * // Get one Glossary
     * const glossary = await prisma.glossary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends glossaryFindUniqueOrThrowArgs>(args: SelectSubset<T, glossaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Glossary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryFindFirstArgs} args - Arguments to find a Glossary
     * @example
     * // Get one Glossary
     * const glossary = await prisma.glossary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends glossaryFindFirstArgs>(args?: SelectSubset<T, glossaryFindFirstArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Glossary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryFindFirstOrThrowArgs} args - Arguments to find a Glossary
     * @example
     * // Get one Glossary
     * const glossary = await prisma.glossary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends glossaryFindFirstOrThrowArgs>(args?: SelectSubset<T, glossaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Glossaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Glossaries
     * const glossaries = await prisma.glossary.findMany()
     * 
     * // Get first 10 Glossaries
     * const glossaries = await prisma.glossary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glossaryWithIdOnly = await prisma.glossary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends glossaryFindManyArgs>(args?: SelectSubset<T, glossaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Glossary.
     * @param {glossaryCreateArgs} args - Arguments to create a Glossary.
     * @example
     * // Create one Glossary
     * const Glossary = await prisma.glossary.create({
     *   data: {
     *     // ... data to create a Glossary
     *   }
     * })
     * 
     */
    create<T extends glossaryCreateArgs>(args: SelectSubset<T, glossaryCreateArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Glossaries.
     * @param {glossaryCreateManyArgs} args - Arguments to create many Glossaries.
     * @example
     * // Create many Glossaries
     * const glossary = await prisma.glossary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends glossaryCreateManyArgs>(args?: SelectSubset<T, glossaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Glossaries and returns the data saved in the database.
     * @param {glossaryCreateManyAndReturnArgs} args - Arguments to create many Glossaries.
     * @example
     * // Create many Glossaries
     * const glossary = await prisma.glossary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Glossaries and only return the `id`
     * const glossaryWithIdOnly = await prisma.glossary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends glossaryCreateManyAndReturnArgs>(args?: SelectSubset<T, glossaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Glossary.
     * @param {glossaryDeleteArgs} args - Arguments to delete one Glossary.
     * @example
     * // Delete one Glossary
     * const Glossary = await prisma.glossary.delete({
     *   where: {
     *     // ... filter to delete one Glossary
     *   }
     * })
     * 
     */
    delete<T extends glossaryDeleteArgs>(args: SelectSubset<T, glossaryDeleteArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Glossary.
     * @param {glossaryUpdateArgs} args - Arguments to update one Glossary.
     * @example
     * // Update one Glossary
     * const glossary = await prisma.glossary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends glossaryUpdateArgs>(args: SelectSubset<T, glossaryUpdateArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Glossaries.
     * @param {glossaryDeleteManyArgs} args - Arguments to filter Glossaries to delete.
     * @example
     * // Delete a few Glossaries
     * const { count } = await prisma.glossary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends glossaryDeleteManyArgs>(args?: SelectSubset<T, glossaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Glossaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Glossaries
     * const glossary = await prisma.glossary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends glossaryUpdateManyArgs>(args: SelectSubset<T, glossaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Glossaries and returns the data updated in the database.
     * @param {glossaryUpdateManyAndReturnArgs} args - Arguments to update many Glossaries.
     * @example
     * // Update many Glossaries
     * const glossary = await prisma.glossary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Glossaries and only return the `id`
     * const glossaryWithIdOnly = await prisma.glossary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends glossaryUpdateManyAndReturnArgs>(args: SelectSubset<T, glossaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Glossary.
     * @param {glossaryUpsertArgs} args - Arguments to update or create a Glossary.
     * @example
     * // Update or create a Glossary
     * const glossary = await prisma.glossary.upsert({
     *   create: {
     *     // ... data to create a Glossary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Glossary we want to update
     *   }
     * })
     */
    upsert<T extends glossaryUpsertArgs>(args: SelectSubset<T, glossaryUpsertArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Glossaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryCountArgs} args - Arguments to filter Glossaries to count.
     * @example
     * // Count the number of Glossaries
     * const count = await prisma.glossary.count({
     *   where: {
     *     // ... the filter for the Glossaries we want to count
     *   }
     * })
    **/
    count<T extends glossaryCountArgs>(
      args?: Subset<T, glossaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Glossary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryAggregateArgs>(args: Subset<T, GlossaryAggregateArgs>): Prisma.PrismaPromise<GetGlossaryAggregateType<T>>

    /**
     * Group by Glossary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {glossaryGroupByArgs} args - Group by arguments.
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
      T extends glossaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: glossaryGroupByArgs['orderBy'] }
        : { orderBy?: glossaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, glossaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the glossary model
   */
  readonly fields: glossaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for glossary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__glossaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    related_glossary_terms_related_glossary_terms_related_term_idToglossary<T extends glossary$related_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs> = {}>(args?: Subset<T, glossary$related_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    related_glossary_terms_related_glossary_terms_term_idToglossary<T extends glossary$related_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs> = {}>(args?: Subset<T, glossary$related_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the glossary model
   */
  interface glossaryFieldRefs {
    readonly id: FieldRef<"glossary", 'Int'>
    readonly term: FieldRef<"glossary", 'String'>
    readonly slug: FieldRef<"glossary", 'String'>
    readonly definition: FieldRef<"glossary", 'String'>
    readonly created_at: FieldRef<"glossary", 'DateTime'>
    readonly updated_at: FieldRef<"glossary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * glossary findUnique
   */
  export type glossaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter, which glossary to fetch.
     */
    where: glossaryWhereUniqueInput
  }

  /**
   * glossary findUniqueOrThrow
   */
  export type glossaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter, which glossary to fetch.
     */
    where: glossaryWhereUniqueInput
  }

  /**
   * glossary findFirst
   */
  export type glossaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter, which glossary to fetch.
     */
    where?: glossaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of glossaries to fetch.
     */
    orderBy?: glossaryOrderByWithRelationInput | glossaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for glossaries.
     */
    cursor?: glossaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` glossaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` glossaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of glossaries.
     */
    distinct?: GlossaryScalarFieldEnum | GlossaryScalarFieldEnum[]
  }

  /**
   * glossary findFirstOrThrow
   */
  export type glossaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter, which glossary to fetch.
     */
    where?: glossaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of glossaries to fetch.
     */
    orderBy?: glossaryOrderByWithRelationInput | glossaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for glossaries.
     */
    cursor?: glossaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` glossaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` glossaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of glossaries.
     */
    distinct?: GlossaryScalarFieldEnum | GlossaryScalarFieldEnum[]
  }

  /**
   * glossary findMany
   */
  export type glossaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter, which glossaries to fetch.
     */
    where?: glossaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of glossaries to fetch.
     */
    orderBy?: glossaryOrderByWithRelationInput | glossaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing glossaries.
     */
    cursor?: glossaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` glossaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` glossaries.
     */
    skip?: number
    distinct?: GlossaryScalarFieldEnum | GlossaryScalarFieldEnum[]
  }

  /**
   * glossary create
   */
  export type glossaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * The data needed to create a glossary.
     */
    data: XOR<glossaryCreateInput, glossaryUncheckedCreateInput>
  }

  /**
   * glossary createMany
   */
  export type glossaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many glossaries.
     */
    data: glossaryCreateManyInput | glossaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * glossary createManyAndReturn
   */
  export type glossaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * The data used to create many glossaries.
     */
    data: glossaryCreateManyInput | glossaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * glossary update
   */
  export type glossaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * The data needed to update a glossary.
     */
    data: XOR<glossaryUpdateInput, glossaryUncheckedUpdateInput>
    /**
     * Choose, which glossary to update.
     */
    where: glossaryWhereUniqueInput
  }

  /**
   * glossary updateMany
   */
  export type glossaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update glossaries.
     */
    data: XOR<glossaryUpdateManyMutationInput, glossaryUncheckedUpdateManyInput>
    /**
     * Filter which glossaries to update
     */
    where?: glossaryWhereInput
    /**
     * Limit how many glossaries to update.
     */
    limit?: number
  }

  /**
   * glossary updateManyAndReturn
   */
  export type glossaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * The data used to update glossaries.
     */
    data: XOR<glossaryUpdateManyMutationInput, glossaryUncheckedUpdateManyInput>
    /**
     * Filter which glossaries to update
     */
    where?: glossaryWhereInput
    /**
     * Limit how many glossaries to update.
     */
    limit?: number
  }

  /**
   * glossary upsert
   */
  export type glossaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * The filter to search for the glossary to update in case it exists.
     */
    where: glossaryWhereUniqueInput
    /**
     * In case the glossary found by the `where` argument doesn't exist, create a new glossary with this data.
     */
    create: XOR<glossaryCreateInput, glossaryUncheckedCreateInput>
    /**
     * In case the glossary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<glossaryUpdateInput, glossaryUncheckedUpdateInput>
  }

  /**
   * glossary delete
   */
  export type glossaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
    /**
     * Filter which glossary to delete.
     */
    where: glossaryWhereUniqueInput
  }

  /**
   * glossary deleteMany
   */
  export type glossaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which glossaries to delete
     */
    where?: glossaryWhereInput
    /**
     * Limit how many glossaries to delete.
     */
    limit?: number
  }

  /**
   * glossary.related_glossary_terms_related_glossary_terms_related_term_idToglossary
   */
  export type glossary$related_glossary_terms_related_glossary_terms_related_term_idToglossaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    where?: related_glossary_termsWhereInput
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    cursor?: related_glossary_termsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Related_glossary_termsScalarFieldEnum | Related_glossary_termsScalarFieldEnum[]
  }

  /**
   * glossary.related_glossary_terms_related_glossary_terms_term_idToglossary
   */
  export type glossary$related_glossary_terms_related_glossary_terms_term_idToglossaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    where?: related_glossary_termsWhereInput
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    cursor?: related_glossary_termsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Related_glossary_termsScalarFieldEnum | Related_glossary_termsScalarFieldEnum[]
  }

  /**
   * glossary without action
   */
  export type glossaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the glossary
     */
    select?: glossarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the glossary
     */
    omit?: glossaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: glossaryInclude<ExtArgs> | null
  }


  /**
   * Model related_glossary_terms
   */

  export type AggregateRelated_glossary_terms = {
    _count: Related_glossary_termsCountAggregateOutputType | null
    _avg: Related_glossary_termsAvgAggregateOutputType | null
    _sum: Related_glossary_termsSumAggregateOutputType | null
    _min: Related_glossary_termsMinAggregateOutputType | null
    _max: Related_glossary_termsMaxAggregateOutputType | null
  }

  export type Related_glossary_termsAvgAggregateOutputType = {
    term_id: number | null
    related_term_id: number | null
  }

  export type Related_glossary_termsSumAggregateOutputType = {
    term_id: number | null
    related_term_id: number | null
  }

  export type Related_glossary_termsMinAggregateOutputType = {
    term_id: number | null
    related_term_id: number | null
  }

  export type Related_glossary_termsMaxAggregateOutputType = {
    term_id: number | null
    related_term_id: number | null
  }

  export type Related_glossary_termsCountAggregateOutputType = {
    term_id: number
    related_term_id: number
    _all: number
  }


  export type Related_glossary_termsAvgAggregateInputType = {
    term_id?: true
    related_term_id?: true
  }

  export type Related_glossary_termsSumAggregateInputType = {
    term_id?: true
    related_term_id?: true
  }

  export type Related_glossary_termsMinAggregateInputType = {
    term_id?: true
    related_term_id?: true
  }

  export type Related_glossary_termsMaxAggregateInputType = {
    term_id?: true
    related_term_id?: true
  }

  export type Related_glossary_termsCountAggregateInputType = {
    term_id?: true
    related_term_id?: true
    _all?: true
  }

  export type Related_glossary_termsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which related_glossary_terms to aggregate.
     */
    where?: related_glossary_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of related_glossary_terms to fetch.
     */
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: related_glossary_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` related_glossary_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` related_glossary_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned related_glossary_terms
    **/
    _count?: true | Related_glossary_termsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Related_glossary_termsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Related_glossary_termsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Related_glossary_termsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Related_glossary_termsMaxAggregateInputType
  }

  export type GetRelated_glossary_termsAggregateType<T extends Related_glossary_termsAggregateArgs> = {
        [P in keyof T & keyof AggregateRelated_glossary_terms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelated_glossary_terms[P]>
      : GetScalarType<T[P], AggregateRelated_glossary_terms[P]>
  }




  export type related_glossary_termsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: related_glossary_termsWhereInput
    orderBy?: related_glossary_termsOrderByWithAggregationInput | related_glossary_termsOrderByWithAggregationInput[]
    by: Related_glossary_termsScalarFieldEnum[] | Related_glossary_termsScalarFieldEnum
    having?: related_glossary_termsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Related_glossary_termsCountAggregateInputType | true
    _avg?: Related_glossary_termsAvgAggregateInputType
    _sum?: Related_glossary_termsSumAggregateInputType
    _min?: Related_glossary_termsMinAggregateInputType
    _max?: Related_glossary_termsMaxAggregateInputType
  }

  export type Related_glossary_termsGroupByOutputType = {
    term_id: number
    related_term_id: number
    _count: Related_glossary_termsCountAggregateOutputType | null
    _avg: Related_glossary_termsAvgAggregateOutputType | null
    _sum: Related_glossary_termsSumAggregateOutputType | null
    _min: Related_glossary_termsMinAggregateOutputType | null
    _max: Related_glossary_termsMaxAggregateOutputType | null
  }

  type GetRelated_glossary_termsGroupByPayload<T extends related_glossary_termsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Related_glossary_termsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Related_glossary_termsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Related_glossary_termsGroupByOutputType[P]>
            : GetScalarType<T[P], Related_glossary_termsGroupByOutputType[P]>
        }
      >
    >


  export type related_glossary_termsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    term_id?: boolean
    related_term_id?: boolean
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["related_glossary_terms"]>

  export type related_glossary_termsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    term_id?: boolean
    related_term_id?: boolean
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["related_glossary_terms"]>

  export type related_glossary_termsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    term_id?: boolean
    related_term_id?: boolean
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["related_glossary_terms"]>

  export type related_glossary_termsSelectScalar = {
    term_id?: boolean
    related_term_id?: boolean
  }

  export type related_glossary_termsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"term_id" | "related_term_id", ExtArgs["result"]["related_glossary_terms"]>
  export type related_glossary_termsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }
  export type related_glossary_termsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }
  export type related_glossary_termsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossary_related_glossary_terms_related_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
    glossary_related_glossary_terms_term_idToglossary?: boolean | glossaryDefaultArgs<ExtArgs>
  }

  export type $related_glossary_termsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "related_glossary_terms"
    objects: {
      glossary_related_glossary_terms_related_term_idToglossary: Prisma.$glossaryPayload<ExtArgs>
      glossary_related_glossary_terms_term_idToglossary: Prisma.$glossaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      term_id: number
      related_term_id: number
    }, ExtArgs["result"]["related_glossary_terms"]>
    composites: {}
  }

  type related_glossary_termsGetPayload<S extends boolean | null | undefined | related_glossary_termsDefaultArgs> = $Result.GetResult<Prisma.$related_glossary_termsPayload, S>

  type related_glossary_termsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<related_glossary_termsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Related_glossary_termsCountAggregateInputType | true
    }

  export interface related_glossary_termsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['related_glossary_terms'], meta: { name: 'related_glossary_terms' } }
    /**
     * Find zero or one Related_glossary_terms that matches the filter.
     * @param {related_glossary_termsFindUniqueArgs} args - Arguments to find a Related_glossary_terms
     * @example
     * // Get one Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends related_glossary_termsFindUniqueArgs>(args: SelectSubset<T, related_glossary_termsFindUniqueArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Related_glossary_terms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {related_glossary_termsFindUniqueOrThrowArgs} args - Arguments to find a Related_glossary_terms
     * @example
     * // Get one Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends related_glossary_termsFindUniqueOrThrowArgs>(args: SelectSubset<T, related_glossary_termsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Related_glossary_terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsFindFirstArgs} args - Arguments to find a Related_glossary_terms
     * @example
     * // Get one Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends related_glossary_termsFindFirstArgs>(args?: SelectSubset<T, related_glossary_termsFindFirstArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Related_glossary_terms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsFindFirstOrThrowArgs} args - Arguments to find a Related_glossary_terms
     * @example
     * // Get one Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends related_glossary_termsFindFirstOrThrowArgs>(args?: SelectSubset<T, related_glossary_termsFindFirstOrThrowArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Related_glossary_terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findMany()
     * 
     * // Get first 10 Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.findMany({ take: 10 })
     * 
     * // Only select the `term_id`
     * const related_glossary_termsWithTerm_idOnly = await prisma.related_glossary_terms.findMany({ select: { term_id: true } })
     * 
     */
    findMany<T extends related_glossary_termsFindManyArgs>(args?: SelectSubset<T, related_glossary_termsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Related_glossary_terms.
     * @param {related_glossary_termsCreateArgs} args - Arguments to create a Related_glossary_terms.
     * @example
     * // Create one Related_glossary_terms
     * const Related_glossary_terms = await prisma.related_glossary_terms.create({
     *   data: {
     *     // ... data to create a Related_glossary_terms
     *   }
     * })
     * 
     */
    create<T extends related_glossary_termsCreateArgs>(args: SelectSubset<T, related_glossary_termsCreateArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Related_glossary_terms.
     * @param {related_glossary_termsCreateManyArgs} args - Arguments to create many Related_glossary_terms.
     * @example
     * // Create many Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends related_glossary_termsCreateManyArgs>(args?: SelectSubset<T, related_glossary_termsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Related_glossary_terms and returns the data saved in the database.
     * @param {related_glossary_termsCreateManyAndReturnArgs} args - Arguments to create many Related_glossary_terms.
     * @example
     * // Create many Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Related_glossary_terms and only return the `term_id`
     * const related_glossary_termsWithTerm_idOnly = await prisma.related_glossary_terms.createManyAndReturn({
     *   select: { term_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends related_glossary_termsCreateManyAndReturnArgs>(args?: SelectSubset<T, related_glossary_termsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Related_glossary_terms.
     * @param {related_glossary_termsDeleteArgs} args - Arguments to delete one Related_glossary_terms.
     * @example
     * // Delete one Related_glossary_terms
     * const Related_glossary_terms = await prisma.related_glossary_terms.delete({
     *   where: {
     *     // ... filter to delete one Related_glossary_terms
     *   }
     * })
     * 
     */
    delete<T extends related_glossary_termsDeleteArgs>(args: SelectSubset<T, related_glossary_termsDeleteArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Related_glossary_terms.
     * @param {related_glossary_termsUpdateArgs} args - Arguments to update one Related_glossary_terms.
     * @example
     * // Update one Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends related_glossary_termsUpdateArgs>(args: SelectSubset<T, related_glossary_termsUpdateArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Related_glossary_terms.
     * @param {related_glossary_termsDeleteManyArgs} args - Arguments to filter Related_glossary_terms to delete.
     * @example
     * // Delete a few Related_glossary_terms
     * const { count } = await prisma.related_glossary_terms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends related_glossary_termsDeleteManyArgs>(args?: SelectSubset<T, related_glossary_termsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Related_glossary_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends related_glossary_termsUpdateManyArgs>(args: SelectSubset<T, related_glossary_termsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Related_glossary_terms and returns the data updated in the database.
     * @param {related_glossary_termsUpdateManyAndReturnArgs} args - Arguments to update many Related_glossary_terms.
     * @example
     * // Update many Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Related_glossary_terms and only return the `term_id`
     * const related_glossary_termsWithTerm_idOnly = await prisma.related_glossary_terms.updateManyAndReturn({
     *   select: { term_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends related_glossary_termsUpdateManyAndReturnArgs>(args: SelectSubset<T, related_glossary_termsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Related_glossary_terms.
     * @param {related_glossary_termsUpsertArgs} args - Arguments to update or create a Related_glossary_terms.
     * @example
     * // Update or create a Related_glossary_terms
     * const related_glossary_terms = await prisma.related_glossary_terms.upsert({
     *   create: {
     *     // ... data to create a Related_glossary_terms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Related_glossary_terms we want to update
     *   }
     * })
     */
    upsert<T extends related_glossary_termsUpsertArgs>(args: SelectSubset<T, related_glossary_termsUpsertArgs<ExtArgs>>): Prisma__related_glossary_termsClient<$Result.GetResult<Prisma.$related_glossary_termsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Related_glossary_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsCountArgs} args - Arguments to filter Related_glossary_terms to count.
     * @example
     * // Count the number of Related_glossary_terms
     * const count = await prisma.related_glossary_terms.count({
     *   where: {
     *     // ... the filter for the Related_glossary_terms we want to count
     *   }
     * })
    **/
    count<T extends related_glossary_termsCountArgs>(
      args?: Subset<T, related_glossary_termsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Related_glossary_termsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Related_glossary_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Related_glossary_termsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Related_glossary_termsAggregateArgs>(args: Subset<T, Related_glossary_termsAggregateArgs>): Prisma.PrismaPromise<GetRelated_glossary_termsAggregateType<T>>

    /**
     * Group by Related_glossary_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {related_glossary_termsGroupByArgs} args - Group by arguments.
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
      T extends related_glossary_termsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: related_glossary_termsGroupByArgs['orderBy'] }
        : { orderBy?: related_glossary_termsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, related_glossary_termsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelated_glossary_termsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the related_glossary_terms model
   */
  readonly fields: related_glossary_termsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for related_glossary_terms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__related_glossary_termsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glossary_related_glossary_terms_related_term_idToglossary<T extends glossaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, glossaryDefaultArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    glossary_related_glossary_terms_term_idToglossary<T extends glossaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, glossaryDefaultArgs<ExtArgs>>): Prisma__glossaryClient<$Result.GetResult<Prisma.$glossaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the related_glossary_terms model
   */
  interface related_glossary_termsFieldRefs {
    readonly term_id: FieldRef<"related_glossary_terms", 'Int'>
    readonly related_term_id: FieldRef<"related_glossary_terms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * related_glossary_terms findUnique
   */
  export type related_glossary_termsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter, which related_glossary_terms to fetch.
     */
    where: related_glossary_termsWhereUniqueInput
  }

  /**
   * related_glossary_terms findUniqueOrThrow
   */
  export type related_glossary_termsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter, which related_glossary_terms to fetch.
     */
    where: related_glossary_termsWhereUniqueInput
  }

  /**
   * related_glossary_terms findFirst
   */
  export type related_glossary_termsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter, which related_glossary_terms to fetch.
     */
    where?: related_glossary_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of related_glossary_terms to fetch.
     */
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for related_glossary_terms.
     */
    cursor?: related_glossary_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` related_glossary_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` related_glossary_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of related_glossary_terms.
     */
    distinct?: Related_glossary_termsScalarFieldEnum | Related_glossary_termsScalarFieldEnum[]
  }

  /**
   * related_glossary_terms findFirstOrThrow
   */
  export type related_glossary_termsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter, which related_glossary_terms to fetch.
     */
    where?: related_glossary_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of related_glossary_terms to fetch.
     */
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for related_glossary_terms.
     */
    cursor?: related_glossary_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` related_glossary_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` related_glossary_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of related_glossary_terms.
     */
    distinct?: Related_glossary_termsScalarFieldEnum | Related_glossary_termsScalarFieldEnum[]
  }

  /**
   * related_glossary_terms findMany
   */
  export type related_glossary_termsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter, which related_glossary_terms to fetch.
     */
    where?: related_glossary_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of related_glossary_terms to fetch.
     */
    orderBy?: related_glossary_termsOrderByWithRelationInput | related_glossary_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing related_glossary_terms.
     */
    cursor?: related_glossary_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` related_glossary_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` related_glossary_terms.
     */
    skip?: number
    distinct?: Related_glossary_termsScalarFieldEnum | Related_glossary_termsScalarFieldEnum[]
  }

  /**
   * related_glossary_terms create
   */
  export type related_glossary_termsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * The data needed to create a related_glossary_terms.
     */
    data: XOR<related_glossary_termsCreateInput, related_glossary_termsUncheckedCreateInput>
  }

  /**
   * related_glossary_terms createMany
   */
  export type related_glossary_termsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many related_glossary_terms.
     */
    data: related_glossary_termsCreateManyInput | related_glossary_termsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * related_glossary_terms createManyAndReturn
   */
  export type related_glossary_termsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * The data used to create many related_glossary_terms.
     */
    data: related_glossary_termsCreateManyInput | related_glossary_termsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * related_glossary_terms update
   */
  export type related_glossary_termsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * The data needed to update a related_glossary_terms.
     */
    data: XOR<related_glossary_termsUpdateInput, related_glossary_termsUncheckedUpdateInput>
    /**
     * Choose, which related_glossary_terms to update.
     */
    where: related_glossary_termsWhereUniqueInput
  }

  /**
   * related_glossary_terms updateMany
   */
  export type related_glossary_termsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update related_glossary_terms.
     */
    data: XOR<related_glossary_termsUpdateManyMutationInput, related_glossary_termsUncheckedUpdateManyInput>
    /**
     * Filter which related_glossary_terms to update
     */
    where?: related_glossary_termsWhereInput
    /**
     * Limit how many related_glossary_terms to update.
     */
    limit?: number
  }

  /**
   * related_glossary_terms updateManyAndReturn
   */
  export type related_glossary_termsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * The data used to update related_glossary_terms.
     */
    data: XOR<related_glossary_termsUpdateManyMutationInput, related_glossary_termsUncheckedUpdateManyInput>
    /**
     * Filter which related_glossary_terms to update
     */
    where?: related_glossary_termsWhereInput
    /**
     * Limit how many related_glossary_terms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * related_glossary_terms upsert
   */
  export type related_glossary_termsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * The filter to search for the related_glossary_terms to update in case it exists.
     */
    where: related_glossary_termsWhereUniqueInput
    /**
     * In case the related_glossary_terms found by the `where` argument doesn't exist, create a new related_glossary_terms with this data.
     */
    create: XOR<related_glossary_termsCreateInput, related_glossary_termsUncheckedCreateInput>
    /**
     * In case the related_glossary_terms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<related_glossary_termsUpdateInput, related_glossary_termsUncheckedUpdateInput>
  }

  /**
   * related_glossary_terms delete
   */
  export type related_glossary_termsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
    /**
     * Filter which related_glossary_terms to delete.
     */
    where: related_glossary_termsWhereUniqueInput
  }

  /**
   * related_glossary_terms deleteMany
   */
  export type related_glossary_termsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which related_glossary_terms to delete
     */
    where?: related_glossary_termsWhereInput
    /**
     * Limit how many related_glossary_terms to delete.
     */
    limit?: number
  }

  /**
   * related_glossary_terms without action
   */
  export type related_glossary_termsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the related_glossary_terms
     */
    select?: related_glossary_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the related_glossary_terms
     */
    omit?: related_glossary_termsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: related_glossary_termsInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    userId: number
    expires: Date
    sessionToken: string
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expires" | "sessionToken", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      expires: Date
      sessionToken: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly userId: FieldRef<"sessions", 'Int'>
    readonly expires: FieldRef<"sessions", 'DateTime'>
    readonly sessionToken: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model success_stories
   */

  export type AggregateSuccess_stories = {
    _count: Success_storiesCountAggregateOutputType | null
    _avg: Success_storiesAvgAggregateOutputType | null
    _sum: Success_storiesSumAggregateOutputType | null
    _min: Success_storiesMinAggregateOutputType | null
    _max: Success_storiesMaxAggregateOutputType | null
  }

  export type Success_storiesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Success_storiesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Success_storiesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    slug: string | null
    optional_url: string | null
    featured: boolean | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Success_storiesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    slug: string | null
    optional_url: string | null
    featured: boolean | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Success_storiesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    slug: number
    optional_url: number
    featured: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Success_storiesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Success_storiesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Success_storiesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    slug?: true
    optional_url?: true
    featured?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Success_storiesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    slug?: true
    optional_url?: true
    featured?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Success_storiesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    slug?: true
    optional_url?: true
    featured?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Success_storiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which success_stories to aggregate.
     */
    where?: success_storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_stories to fetch.
     */
    orderBy?: success_storiesOrderByWithRelationInput | success_storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: success_storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned success_stories
    **/
    _count?: true | Success_storiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Success_storiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Success_storiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Success_storiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Success_storiesMaxAggregateInputType
  }

  export type GetSuccess_storiesAggregateType<T extends Success_storiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccess_stories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccess_stories[P]>
      : GetScalarType<T[P], AggregateSuccess_stories[P]>
  }




  export type success_storiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: success_storiesWhereInput
    orderBy?: success_storiesOrderByWithAggregationInput | success_storiesOrderByWithAggregationInput[]
    by: Success_storiesScalarFieldEnum[] | Success_storiesScalarFieldEnum
    having?: success_storiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Success_storiesCountAggregateInputType | true
    _avg?: Success_storiesAvgAggregateInputType
    _sum?: Success_storiesSumAggregateInputType
    _min?: Success_storiesMinAggregateInputType
    _max?: Success_storiesMaxAggregateInputType
  }

  export type Success_storiesGroupByOutputType = {
    id: number
    title: string
    content: string
    slug: string
    optional_url: string | null
    featured: boolean | null
    user_id: number | null
    created_at: Date
    updated_at: Date
    _count: Success_storiesCountAggregateOutputType | null
    _avg: Success_storiesAvgAggregateOutputType | null
    _sum: Success_storiesSumAggregateOutputType | null
    _min: Success_storiesMinAggregateOutputType | null
    _max: Success_storiesMaxAggregateOutputType | null
  }

  type GetSuccess_storiesGroupByPayload<T extends success_storiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Success_storiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Success_storiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Success_storiesGroupByOutputType[P]>
            : GetScalarType<T[P], Success_storiesGroupByOutputType[P]>
        }
      >
    >


  export type success_storiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    optional_url?: boolean
    featured?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    comments?: boolean | success_stories$commentsArgs<ExtArgs>
    users?: boolean | success_stories$usersArgs<ExtArgs>
    success_story_tools?: boolean | success_stories$success_story_toolsArgs<ExtArgs>
    _count?: boolean | Success_storiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["success_stories"]>

  export type success_storiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    optional_url?: boolean
    featured?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | success_stories$usersArgs<ExtArgs>
  }, ExtArgs["result"]["success_stories"]>

  export type success_storiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    optional_url?: boolean
    featured?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | success_stories$usersArgs<ExtArgs>
  }, ExtArgs["result"]["success_stories"]>

  export type success_storiesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    slug?: boolean
    optional_url?: boolean
    featured?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type success_storiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "slug" | "optional_url" | "featured" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["success_stories"]>
  export type success_storiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | success_stories$commentsArgs<ExtArgs>
    users?: boolean | success_stories$usersArgs<ExtArgs>
    success_story_tools?: boolean | success_stories$success_story_toolsArgs<ExtArgs>
    _count?: boolean | Success_storiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type success_storiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | success_stories$usersArgs<ExtArgs>
  }
  export type success_storiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | success_stories$usersArgs<ExtArgs>
  }

  export type $success_storiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "success_stories"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      success_story_tools: Prisma.$success_story_toolsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      slug: string
      optional_url: string | null
      featured: boolean | null
      user_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["success_stories"]>
    composites: {}
  }

  type success_storiesGetPayload<S extends boolean | null | undefined | success_storiesDefaultArgs> = $Result.GetResult<Prisma.$success_storiesPayload, S>

  type success_storiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<success_storiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Success_storiesCountAggregateInputType | true
    }

  export interface success_storiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['success_stories'], meta: { name: 'success_stories' } }
    /**
     * Find zero or one Success_stories that matches the filter.
     * @param {success_storiesFindUniqueArgs} args - Arguments to find a Success_stories
     * @example
     * // Get one Success_stories
     * const success_stories = await prisma.success_stories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends success_storiesFindUniqueArgs>(args: SelectSubset<T, success_storiesFindUniqueArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Success_stories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {success_storiesFindUniqueOrThrowArgs} args - Arguments to find a Success_stories
     * @example
     * // Get one Success_stories
     * const success_stories = await prisma.success_stories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends success_storiesFindUniqueOrThrowArgs>(args: SelectSubset<T, success_storiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Success_stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesFindFirstArgs} args - Arguments to find a Success_stories
     * @example
     * // Get one Success_stories
     * const success_stories = await prisma.success_stories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends success_storiesFindFirstArgs>(args?: SelectSubset<T, success_storiesFindFirstArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Success_stories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesFindFirstOrThrowArgs} args - Arguments to find a Success_stories
     * @example
     * // Get one Success_stories
     * const success_stories = await prisma.success_stories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends success_storiesFindFirstOrThrowArgs>(args?: SelectSubset<T, success_storiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Success_stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Success_stories
     * const success_stories = await prisma.success_stories.findMany()
     * 
     * // Get first 10 Success_stories
     * const success_stories = await prisma.success_stories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const success_storiesWithIdOnly = await prisma.success_stories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends success_storiesFindManyArgs>(args?: SelectSubset<T, success_storiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Success_stories.
     * @param {success_storiesCreateArgs} args - Arguments to create a Success_stories.
     * @example
     * // Create one Success_stories
     * const Success_stories = await prisma.success_stories.create({
     *   data: {
     *     // ... data to create a Success_stories
     *   }
     * })
     * 
     */
    create<T extends success_storiesCreateArgs>(args: SelectSubset<T, success_storiesCreateArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Success_stories.
     * @param {success_storiesCreateManyArgs} args - Arguments to create many Success_stories.
     * @example
     * // Create many Success_stories
     * const success_stories = await prisma.success_stories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends success_storiesCreateManyArgs>(args?: SelectSubset<T, success_storiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Success_stories and returns the data saved in the database.
     * @param {success_storiesCreateManyAndReturnArgs} args - Arguments to create many Success_stories.
     * @example
     * // Create many Success_stories
     * const success_stories = await prisma.success_stories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Success_stories and only return the `id`
     * const success_storiesWithIdOnly = await prisma.success_stories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends success_storiesCreateManyAndReturnArgs>(args?: SelectSubset<T, success_storiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Success_stories.
     * @param {success_storiesDeleteArgs} args - Arguments to delete one Success_stories.
     * @example
     * // Delete one Success_stories
     * const Success_stories = await prisma.success_stories.delete({
     *   where: {
     *     // ... filter to delete one Success_stories
     *   }
     * })
     * 
     */
    delete<T extends success_storiesDeleteArgs>(args: SelectSubset<T, success_storiesDeleteArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Success_stories.
     * @param {success_storiesUpdateArgs} args - Arguments to update one Success_stories.
     * @example
     * // Update one Success_stories
     * const success_stories = await prisma.success_stories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends success_storiesUpdateArgs>(args: SelectSubset<T, success_storiesUpdateArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Success_stories.
     * @param {success_storiesDeleteManyArgs} args - Arguments to filter Success_stories to delete.
     * @example
     * // Delete a few Success_stories
     * const { count } = await prisma.success_stories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends success_storiesDeleteManyArgs>(args?: SelectSubset<T, success_storiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Success_stories
     * const success_stories = await prisma.success_stories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends success_storiesUpdateManyArgs>(args: SelectSubset<T, success_storiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Success_stories and returns the data updated in the database.
     * @param {success_storiesUpdateManyAndReturnArgs} args - Arguments to update many Success_stories.
     * @example
     * // Update many Success_stories
     * const success_stories = await prisma.success_stories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Success_stories and only return the `id`
     * const success_storiesWithIdOnly = await prisma.success_stories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends success_storiesUpdateManyAndReturnArgs>(args: SelectSubset<T, success_storiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Success_stories.
     * @param {success_storiesUpsertArgs} args - Arguments to update or create a Success_stories.
     * @example
     * // Update or create a Success_stories
     * const success_stories = await prisma.success_stories.upsert({
     *   create: {
     *     // ... data to create a Success_stories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Success_stories we want to update
     *   }
     * })
     */
    upsert<T extends success_storiesUpsertArgs>(args: SelectSubset<T, success_storiesUpsertArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesCountArgs} args - Arguments to filter Success_stories to count.
     * @example
     * // Count the number of Success_stories
     * const count = await prisma.success_stories.count({
     *   where: {
     *     // ... the filter for the Success_stories we want to count
     *   }
     * })
    **/
    count<T extends success_storiesCountArgs>(
      args?: Subset<T, success_storiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Success_storiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Success_storiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Success_storiesAggregateArgs>(args: Subset<T, Success_storiesAggregateArgs>): Prisma.PrismaPromise<GetSuccess_storiesAggregateType<T>>

    /**
     * Group by Success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_storiesGroupByArgs} args - Group by arguments.
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
      T extends success_storiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: success_storiesGroupByArgs['orderBy'] }
        : { orderBy?: success_storiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, success_storiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccess_storiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the success_stories model
   */
  readonly fields: success_storiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for success_stories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__success_storiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends success_stories$commentsArgs<ExtArgs> = {}>(args?: Subset<T, success_stories$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends success_stories$usersArgs<ExtArgs> = {}>(args?: Subset<T, success_stories$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    success_story_tools<T extends success_stories$success_story_toolsArgs<ExtArgs> = {}>(args?: Subset<T, success_stories$success_story_toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the success_stories model
   */
  interface success_storiesFieldRefs {
    readonly id: FieldRef<"success_stories", 'Int'>
    readonly title: FieldRef<"success_stories", 'String'>
    readonly content: FieldRef<"success_stories", 'String'>
    readonly slug: FieldRef<"success_stories", 'String'>
    readonly optional_url: FieldRef<"success_stories", 'String'>
    readonly featured: FieldRef<"success_stories", 'Boolean'>
    readonly user_id: FieldRef<"success_stories", 'Int'>
    readonly created_at: FieldRef<"success_stories", 'DateTime'>
    readonly updated_at: FieldRef<"success_stories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * success_stories findUnique
   */
  export type success_storiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter, which success_stories to fetch.
     */
    where: success_storiesWhereUniqueInput
  }

  /**
   * success_stories findUniqueOrThrow
   */
  export type success_storiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter, which success_stories to fetch.
     */
    where: success_storiesWhereUniqueInput
  }

  /**
   * success_stories findFirst
   */
  export type success_storiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter, which success_stories to fetch.
     */
    where?: success_storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_stories to fetch.
     */
    orderBy?: success_storiesOrderByWithRelationInput | success_storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for success_stories.
     */
    cursor?: success_storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of success_stories.
     */
    distinct?: Success_storiesScalarFieldEnum | Success_storiesScalarFieldEnum[]
  }

  /**
   * success_stories findFirstOrThrow
   */
  export type success_storiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter, which success_stories to fetch.
     */
    where?: success_storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_stories to fetch.
     */
    orderBy?: success_storiesOrderByWithRelationInput | success_storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for success_stories.
     */
    cursor?: success_storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of success_stories.
     */
    distinct?: Success_storiesScalarFieldEnum | Success_storiesScalarFieldEnum[]
  }

  /**
   * success_stories findMany
   */
  export type success_storiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter, which success_stories to fetch.
     */
    where?: success_storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_stories to fetch.
     */
    orderBy?: success_storiesOrderByWithRelationInput | success_storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing success_stories.
     */
    cursor?: success_storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_stories.
     */
    skip?: number
    distinct?: Success_storiesScalarFieldEnum | Success_storiesScalarFieldEnum[]
  }

  /**
   * success_stories create
   */
  export type success_storiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * The data needed to create a success_stories.
     */
    data: XOR<success_storiesCreateInput, success_storiesUncheckedCreateInput>
  }

  /**
   * success_stories createMany
   */
  export type success_storiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many success_stories.
     */
    data: success_storiesCreateManyInput | success_storiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * success_stories createManyAndReturn
   */
  export type success_storiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * The data used to create many success_stories.
     */
    data: success_storiesCreateManyInput | success_storiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * success_stories update
   */
  export type success_storiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * The data needed to update a success_stories.
     */
    data: XOR<success_storiesUpdateInput, success_storiesUncheckedUpdateInput>
    /**
     * Choose, which success_stories to update.
     */
    where: success_storiesWhereUniqueInput
  }

  /**
   * success_stories updateMany
   */
  export type success_storiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update success_stories.
     */
    data: XOR<success_storiesUpdateManyMutationInput, success_storiesUncheckedUpdateManyInput>
    /**
     * Filter which success_stories to update
     */
    where?: success_storiesWhereInput
    /**
     * Limit how many success_stories to update.
     */
    limit?: number
  }

  /**
   * success_stories updateManyAndReturn
   */
  export type success_storiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * The data used to update success_stories.
     */
    data: XOR<success_storiesUpdateManyMutationInput, success_storiesUncheckedUpdateManyInput>
    /**
     * Filter which success_stories to update
     */
    where?: success_storiesWhereInput
    /**
     * Limit how many success_stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * success_stories upsert
   */
  export type success_storiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * The filter to search for the success_stories to update in case it exists.
     */
    where: success_storiesWhereUniqueInput
    /**
     * In case the success_stories found by the `where` argument doesn't exist, create a new success_stories with this data.
     */
    create: XOR<success_storiesCreateInput, success_storiesUncheckedCreateInput>
    /**
     * In case the success_stories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<success_storiesUpdateInput, success_storiesUncheckedUpdateInput>
  }

  /**
   * success_stories delete
   */
  export type success_storiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    /**
     * Filter which success_stories to delete.
     */
    where: success_storiesWhereUniqueInput
  }

  /**
   * success_stories deleteMany
   */
  export type success_storiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which success_stories to delete
     */
    where?: success_storiesWhereInput
    /**
     * Limit how many success_stories to delete.
     */
    limit?: number
  }

  /**
   * success_stories.comments
   */
  export type success_stories$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * success_stories.users
   */
  export type success_stories$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * success_stories.success_story_tools
   */
  export type success_stories$success_story_toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    where?: success_story_toolsWhereInput
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    cursor?: success_story_toolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Success_story_toolsScalarFieldEnum | Success_story_toolsScalarFieldEnum[]
  }

  /**
   * success_stories without action
   */
  export type success_storiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
  }


  /**
   * Model success_story_tools
   */

  export type AggregateSuccess_story_tools = {
    _count: Success_story_toolsCountAggregateOutputType | null
    _avg: Success_story_toolsAvgAggregateOutputType | null
    _sum: Success_story_toolsSumAggregateOutputType | null
    _min: Success_story_toolsMinAggregateOutputType | null
    _max: Success_story_toolsMaxAggregateOutputType | null
  }

  export type Success_story_toolsAvgAggregateOutputType = {
    story_id: number | null
    tool_id: number | null
  }

  export type Success_story_toolsSumAggregateOutputType = {
    story_id: number | null
    tool_id: number | null
  }

  export type Success_story_toolsMinAggregateOutputType = {
    story_id: number | null
    tool_id: number | null
  }

  export type Success_story_toolsMaxAggregateOutputType = {
    story_id: number | null
    tool_id: number | null
  }

  export type Success_story_toolsCountAggregateOutputType = {
    story_id: number
    tool_id: number
    _all: number
  }


  export type Success_story_toolsAvgAggregateInputType = {
    story_id?: true
    tool_id?: true
  }

  export type Success_story_toolsSumAggregateInputType = {
    story_id?: true
    tool_id?: true
  }

  export type Success_story_toolsMinAggregateInputType = {
    story_id?: true
    tool_id?: true
  }

  export type Success_story_toolsMaxAggregateInputType = {
    story_id?: true
    tool_id?: true
  }

  export type Success_story_toolsCountAggregateInputType = {
    story_id?: true
    tool_id?: true
    _all?: true
  }

  export type Success_story_toolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which success_story_tools to aggregate.
     */
    where?: success_story_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_story_tools to fetch.
     */
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: success_story_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_story_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_story_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned success_story_tools
    **/
    _count?: true | Success_story_toolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Success_story_toolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Success_story_toolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Success_story_toolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Success_story_toolsMaxAggregateInputType
  }

  export type GetSuccess_story_toolsAggregateType<T extends Success_story_toolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccess_story_tools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccess_story_tools[P]>
      : GetScalarType<T[P], AggregateSuccess_story_tools[P]>
  }




  export type success_story_toolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: success_story_toolsWhereInput
    orderBy?: success_story_toolsOrderByWithAggregationInput | success_story_toolsOrderByWithAggregationInput[]
    by: Success_story_toolsScalarFieldEnum[] | Success_story_toolsScalarFieldEnum
    having?: success_story_toolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Success_story_toolsCountAggregateInputType | true
    _avg?: Success_story_toolsAvgAggregateInputType
    _sum?: Success_story_toolsSumAggregateInputType
    _min?: Success_story_toolsMinAggregateInputType
    _max?: Success_story_toolsMaxAggregateInputType
  }

  export type Success_story_toolsGroupByOutputType = {
    story_id: number
    tool_id: number
    _count: Success_story_toolsCountAggregateOutputType | null
    _avg: Success_story_toolsAvgAggregateOutputType | null
    _sum: Success_story_toolsSumAggregateOutputType | null
    _min: Success_story_toolsMinAggregateOutputType | null
    _max: Success_story_toolsMaxAggregateOutputType | null
  }

  type GetSuccess_story_toolsGroupByPayload<T extends success_story_toolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Success_story_toolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Success_story_toolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Success_story_toolsGroupByOutputType[P]>
            : GetScalarType<T[P], Success_story_toolsGroupByOutputType[P]>
        }
      >
    >


  export type success_story_toolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    story_id?: boolean
    tool_id?: boolean
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["success_story_tools"]>

  export type success_story_toolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    story_id?: boolean
    tool_id?: boolean
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["success_story_tools"]>

  export type success_story_toolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    story_id?: boolean
    tool_id?: boolean
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["success_story_tools"]>

  export type success_story_toolsSelectScalar = {
    story_id?: boolean
    tool_id?: boolean
  }

  export type success_story_toolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"story_id" | "tool_id", ExtArgs["result"]["success_story_tools"]>
  export type success_story_toolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }
  export type success_story_toolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }
  export type success_story_toolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_stories?: boolean | success_storiesDefaultArgs<ExtArgs>
    tools?: boolean | toolsDefaultArgs<ExtArgs>
  }

  export type $success_story_toolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "success_story_tools"
    objects: {
      success_stories: Prisma.$success_storiesPayload<ExtArgs>
      tools: Prisma.$toolsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      story_id: number
      tool_id: number
    }, ExtArgs["result"]["success_story_tools"]>
    composites: {}
  }

  type success_story_toolsGetPayload<S extends boolean | null | undefined | success_story_toolsDefaultArgs> = $Result.GetResult<Prisma.$success_story_toolsPayload, S>

  type success_story_toolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<success_story_toolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Success_story_toolsCountAggregateInputType | true
    }

  export interface success_story_toolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['success_story_tools'], meta: { name: 'success_story_tools' } }
    /**
     * Find zero or one Success_story_tools that matches the filter.
     * @param {success_story_toolsFindUniqueArgs} args - Arguments to find a Success_story_tools
     * @example
     * // Get one Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends success_story_toolsFindUniqueArgs>(args: SelectSubset<T, success_story_toolsFindUniqueArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Success_story_tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {success_story_toolsFindUniqueOrThrowArgs} args - Arguments to find a Success_story_tools
     * @example
     * // Get one Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends success_story_toolsFindUniqueOrThrowArgs>(args: SelectSubset<T, success_story_toolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Success_story_tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsFindFirstArgs} args - Arguments to find a Success_story_tools
     * @example
     * // Get one Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends success_story_toolsFindFirstArgs>(args?: SelectSubset<T, success_story_toolsFindFirstArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Success_story_tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsFindFirstOrThrowArgs} args - Arguments to find a Success_story_tools
     * @example
     * // Get one Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends success_story_toolsFindFirstOrThrowArgs>(args?: SelectSubset<T, success_story_toolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Success_story_tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findMany()
     * 
     * // Get first 10 Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.findMany({ take: 10 })
     * 
     * // Only select the `story_id`
     * const success_story_toolsWithStory_idOnly = await prisma.success_story_tools.findMany({ select: { story_id: true } })
     * 
     */
    findMany<T extends success_story_toolsFindManyArgs>(args?: SelectSubset<T, success_story_toolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Success_story_tools.
     * @param {success_story_toolsCreateArgs} args - Arguments to create a Success_story_tools.
     * @example
     * // Create one Success_story_tools
     * const Success_story_tools = await prisma.success_story_tools.create({
     *   data: {
     *     // ... data to create a Success_story_tools
     *   }
     * })
     * 
     */
    create<T extends success_story_toolsCreateArgs>(args: SelectSubset<T, success_story_toolsCreateArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Success_story_tools.
     * @param {success_story_toolsCreateManyArgs} args - Arguments to create many Success_story_tools.
     * @example
     * // Create many Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends success_story_toolsCreateManyArgs>(args?: SelectSubset<T, success_story_toolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Success_story_tools and returns the data saved in the database.
     * @param {success_story_toolsCreateManyAndReturnArgs} args - Arguments to create many Success_story_tools.
     * @example
     * // Create many Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Success_story_tools and only return the `story_id`
     * const success_story_toolsWithStory_idOnly = await prisma.success_story_tools.createManyAndReturn({
     *   select: { story_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends success_story_toolsCreateManyAndReturnArgs>(args?: SelectSubset<T, success_story_toolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Success_story_tools.
     * @param {success_story_toolsDeleteArgs} args - Arguments to delete one Success_story_tools.
     * @example
     * // Delete one Success_story_tools
     * const Success_story_tools = await prisma.success_story_tools.delete({
     *   where: {
     *     // ... filter to delete one Success_story_tools
     *   }
     * })
     * 
     */
    delete<T extends success_story_toolsDeleteArgs>(args: SelectSubset<T, success_story_toolsDeleteArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Success_story_tools.
     * @param {success_story_toolsUpdateArgs} args - Arguments to update one Success_story_tools.
     * @example
     * // Update one Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends success_story_toolsUpdateArgs>(args: SelectSubset<T, success_story_toolsUpdateArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Success_story_tools.
     * @param {success_story_toolsDeleteManyArgs} args - Arguments to filter Success_story_tools to delete.
     * @example
     * // Delete a few Success_story_tools
     * const { count } = await prisma.success_story_tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends success_story_toolsDeleteManyArgs>(args?: SelectSubset<T, success_story_toolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Success_story_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends success_story_toolsUpdateManyArgs>(args: SelectSubset<T, success_story_toolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Success_story_tools and returns the data updated in the database.
     * @param {success_story_toolsUpdateManyAndReturnArgs} args - Arguments to update many Success_story_tools.
     * @example
     * // Update many Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Success_story_tools and only return the `story_id`
     * const success_story_toolsWithStory_idOnly = await prisma.success_story_tools.updateManyAndReturn({
     *   select: { story_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends success_story_toolsUpdateManyAndReturnArgs>(args: SelectSubset<T, success_story_toolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Success_story_tools.
     * @param {success_story_toolsUpsertArgs} args - Arguments to update or create a Success_story_tools.
     * @example
     * // Update or create a Success_story_tools
     * const success_story_tools = await prisma.success_story_tools.upsert({
     *   create: {
     *     // ... data to create a Success_story_tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Success_story_tools we want to update
     *   }
     * })
     */
    upsert<T extends success_story_toolsUpsertArgs>(args: SelectSubset<T, success_story_toolsUpsertArgs<ExtArgs>>): Prisma__success_story_toolsClient<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Success_story_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsCountArgs} args - Arguments to filter Success_story_tools to count.
     * @example
     * // Count the number of Success_story_tools
     * const count = await prisma.success_story_tools.count({
     *   where: {
     *     // ... the filter for the Success_story_tools we want to count
     *   }
     * })
    **/
    count<T extends success_story_toolsCountArgs>(
      args?: Subset<T, success_story_toolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Success_story_toolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Success_story_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Success_story_toolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Success_story_toolsAggregateArgs>(args: Subset<T, Success_story_toolsAggregateArgs>): Prisma.PrismaPromise<GetSuccess_story_toolsAggregateType<T>>

    /**
     * Group by Success_story_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {success_story_toolsGroupByArgs} args - Group by arguments.
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
      T extends success_story_toolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: success_story_toolsGroupByArgs['orderBy'] }
        : { orderBy?: success_story_toolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, success_story_toolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccess_story_toolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the success_story_tools model
   */
  readonly fields: success_story_toolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for success_story_tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__success_story_toolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    success_stories<T extends success_storiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, success_storiesDefaultArgs<ExtArgs>>): Prisma__success_storiesClient<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tools<T extends toolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, toolsDefaultArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the success_story_tools model
   */
  interface success_story_toolsFieldRefs {
    readonly story_id: FieldRef<"success_story_tools", 'Int'>
    readonly tool_id: FieldRef<"success_story_tools", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * success_story_tools findUnique
   */
  export type success_story_toolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter, which success_story_tools to fetch.
     */
    where: success_story_toolsWhereUniqueInput
  }

  /**
   * success_story_tools findUniqueOrThrow
   */
  export type success_story_toolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter, which success_story_tools to fetch.
     */
    where: success_story_toolsWhereUniqueInput
  }

  /**
   * success_story_tools findFirst
   */
  export type success_story_toolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter, which success_story_tools to fetch.
     */
    where?: success_story_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_story_tools to fetch.
     */
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for success_story_tools.
     */
    cursor?: success_story_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_story_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_story_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of success_story_tools.
     */
    distinct?: Success_story_toolsScalarFieldEnum | Success_story_toolsScalarFieldEnum[]
  }

  /**
   * success_story_tools findFirstOrThrow
   */
  export type success_story_toolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter, which success_story_tools to fetch.
     */
    where?: success_story_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_story_tools to fetch.
     */
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for success_story_tools.
     */
    cursor?: success_story_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_story_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_story_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of success_story_tools.
     */
    distinct?: Success_story_toolsScalarFieldEnum | Success_story_toolsScalarFieldEnum[]
  }

  /**
   * success_story_tools findMany
   */
  export type success_story_toolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter, which success_story_tools to fetch.
     */
    where?: success_story_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of success_story_tools to fetch.
     */
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing success_story_tools.
     */
    cursor?: success_story_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` success_story_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` success_story_tools.
     */
    skip?: number
    distinct?: Success_story_toolsScalarFieldEnum | Success_story_toolsScalarFieldEnum[]
  }

  /**
   * success_story_tools create
   */
  export type success_story_toolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * The data needed to create a success_story_tools.
     */
    data: XOR<success_story_toolsCreateInput, success_story_toolsUncheckedCreateInput>
  }

  /**
   * success_story_tools createMany
   */
  export type success_story_toolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many success_story_tools.
     */
    data: success_story_toolsCreateManyInput | success_story_toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * success_story_tools createManyAndReturn
   */
  export type success_story_toolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * The data used to create many success_story_tools.
     */
    data: success_story_toolsCreateManyInput | success_story_toolsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * success_story_tools update
   */
  export type success_story_toolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * The data needed to update a success_story_tools.
     */
    data: XOR<success_story_toolsUpdateInput, success_story_toolsUncheckedUpdateInput>
    /**
     * Choose, which success_story_tools to update.
     */
    where: success_story_toolsWhereUniqueInput
  }

  /**
   * success_story_tools updateMany
   */
  export type success_story_toolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update success_story_tools.
     */
    data: XOR<success_story_toolsUpdateManyMutationInput, success_story_toolsUncheckedUpdateManyInput>
    /**
     * Filter which success_story_tools to update
     */
    where?: success_story_toolsWhereInput
    /**
     * Limit how many success_story_tools to update.
     */
    limit?: number
  }

  /**
   * success_story_tools updateManyAndReturn
   */
  export type success_story_toolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * The data used to update success_story_tools.
     */
    data: XOR<success_story_toolsUpdateManyMutationInput, success_story_toolsUncheckedUpdateManyInput>
    /**
     * Filter which success_story_tools to update
     */
    where?: success_story_toolsWhereInput
    /**
     * Limit how many success_story_tools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * success_story_tools upsert
   */
  export type success_story_toolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * The filter to search for the success_story_tools to update in case it exists.
     */
    where: success_story_toolsWhereUniqueInput
    /**
     * In case the success_story_tools found by the `where` argument doesn't exist, create a new success_story_tools with this data.
     */
    create: XOR<success_story_toolsCreateInput, success_story_toolsUncheckedCreateInput>
    /**
     * In case the success_story_tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<success_story_toolsUpdateInput, success_story_toolsUncheckedUpdateInput>
  }

  /**
   * success_story_tools delete
   */
  export type success_story_toolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    /**
     * Filter which success_story_tools to delete.
     */
    where: success_story_toolsWhereUniqueInput
  }

  /**
   * success_story_tools deleteMany
   */
  export type success_story_toolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which success_story_tools to delete
     */
    where?: success_story_toolsWhereInput
    /**
     * Limit how many success_story_tools to delete.
     */
    limit?: number
  }

  /**
   * success_story_tools without action
   */
  export type success_story_toolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
  }


  /**
   * Model tools
   */

  export type AggregateTools = {
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  export type ToolsAvgAggregateOutputType = {
    id: number | null
  }

  export type ToolsSumAggregateOutputType = {
    id: number | null
  }

  export type ToolsMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    url: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ToolsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    url: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ToolsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    icon: number
    url: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ToolsAvgAggregateInputType = {
    id?: true
  }

  export type ToolsSumAggregateInputType = {
    id?: true
  }

  export type ToolsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    url?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ToolsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    url?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ToolsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    url?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ToolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to aggregate.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tools
    **/
    _count?: true | ToolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolsMaxAggregateInputType
  }

  export type GetToolsAggregateType<T extends ToolsAggregateArgs> = {
        [P in keyof T & keyof AggregateTools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTools[P]>
      : GetScalarType<T[P], AggregateTools[P]>
  }




  export type toolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolsWhereInput
    orderBy?: toolsOrderByWithAggregationInput | toolsOrderByWithAggregationInput[]
    by: ToolsScalarFieldEnum[] | ToolsScalarFieldEnum
    having?: toolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolsCountAggregateInputType | true
    _avg?: ToolsAvgAggregateInputType
    _sum?: ToolsSumAggregateInputType
    _min?: ToolsMinAggregateInputType
    _max?: ToolsMaxAggregateInputType
  }

  export type ToolsGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    icon: string | null
    url: string | null
    category: string | null
    created_at: Date
    updated_at: Date
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  type GetToolsGroupByPayload<T extends toolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolsGroupByOutputType[P]>
            : GetScalarType<T[P], ToolsGroupByOutputType[P]>
        }
      >
    >


  export type toolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    success_story_tools?: boolean | tools$success_story_toolsArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    url?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type toolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "icon" | "url" | "category" | "created_at" | "updated_at", ExtArgs["result"]["tools"]>
  export type toolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    success_story_tools?: boolean | tools$success_story_toolsArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type toolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type toolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $toolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tools"
    objects: {
      success_story_tools: Prisma.$success_story_toolsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      icon: string | null
      url: string | null
      category: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tools"]>
    composites: {}
  }

  type toolsGetPayload<S extends boolean | null | undefined | toolsDefaultArgs> = $Result.GetResult<Prisma.$toolsPayload, S>

  type toolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<toolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolsCountAggregateInputType | true
    }

  export interface toolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tools'], meta: { name: 'tools' } }
    /**
     * Find zero or one Tools that matches the filter.
     * @param {toolsFindUniqueArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends toolsFindUniqueArgs>(args: SelectSubset<T, toolsFindUniqueArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {toolsFindUniqueOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends toolsFindUniqueOrThrowArgs>(args: SelectSubset<T, toolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindFirstArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends toolsFindFirstArgs>(args?: SelectSubset<T, toolsFindFirstArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindFirstOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends toolsFindFirstOrThrowArgs>(args?: SelectSubset<T, toolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tools.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolsWithIdOnly = await prisma.tools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends toolsFindManyArgs>(args?: SelectSubset<T, toolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tools.
     * @param {toolsCreateArgs} args - Arguments to create a Tools.
     * @example
     * // Create one Tools
     * const Tools = await prisma.tools.create({
     *   data: {
     *     // ... data to create a Tools
     *   }
     * })
     * 
     */
    create<T extends toolsCreateArgs>(args: SelectSubset<T, toolsCreateArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {toolsCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends toolsCreateManyArgs>(args?: SelectSubset<T, toolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {toolsCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends toolsCreateManyAndReturnArgs>(args?: SelectSubset<T, toolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tools.
     * @param {toolsDeleteArgs} args - Arguments to delete one Tools.
     * @example
     * // Delete one Tools
     * const Tools = await prisma.tools.delete({
     *   where: {
     *     // ... filter to delete one Tools
     *   }
     * })
     * 
     */
    delete<T extends toolsDeleteArgs>(args: SelectSubset<T, toolsDeleteArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tools.
     * @param {toolsUpdateArgs} args - Arguments to update one Tools.
     * @example
     * // Update one Tools
     * const tools = await prisma.tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends toolsUpdateArgs>(args: SelectSubset<T, toolsUpdateArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {toolsDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends toolsDeleteManyArgs>(args?: SelectSubset<T, toolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends toolsUpdateManyArgs>(args: SelectSubset<T, toolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {toolsUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends toolsUpdateManyAndReturnArgs>(args: SelectSubset<T, toolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tools.
     * @param {toolsUpsertArgs} args - Arguments to update or create a Tools.
     * @example
     * // Update or create a Tools
     * const tools = await prisma.tools.upsert({
     *   create: {
     *     // ... data to create a Tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tools we want to update
     *   }
     * })
     */
    upsert<T extends toolsUpsertArgs>(args: SelectSubset<T, toolsUpsertArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tools.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends toolsCountArgs>(
      args?: Subset<T, toolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolsAggregateArgs>(args: Subset<T, ToolsAggregateArgs>): Prisma.PrismaPromise<GetToolsAggregateType<T>>

    /**
     * Group by Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsGroupByArgs} args - Group by arguments.
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
      T extends toolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolsGroupByArgs['orderBy'] }
        : { orderBy?: toolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, toolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tools model
   */
  readonly fields: toolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    success_story_tools<T extends tools$success_story_toolsArgs<ExtArgs> = {}>(args?: Subset<T, tools$success_story_toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_story_toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tools model
   */
  interface toolsFieldRefs {
    readonly id: FieldRef<"tools", 'Int'>
    readonly name: FieldRef<"tools", 'String'>
    readonly slug: FieldRef<"tools", 'String'>
    readonly description: FieldRef<"tools", 'String'>
    readonly icon: FieldRef<"tools", 'String'>
    readonly url: FieldRef<"tools", 'String'>
    readonly category: FieldRef<"tools", 'String'>
    readonly created_at: FieldRef<"tools", 'DateTime'>
    readonly updated_at: FieldRef<"tools", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tools findUnique
   */
  export type toolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools findUniqueOrThrow
   */
  export type toolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools findFirst
   */
  export type toolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools findFirstOrThrow
   */
  export type toolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools findMany
   */
  export type toolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools create
   */
  export type toolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The data needed to create a tools.
     */
    data: XOR<toolsCreateInput, toolsUncheckedCreateInput>
  }

  /**
   * tools createMany
   */
  export type toolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolsCreateManyInput | toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tools createManyAndReturn
   */
  export type toolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * The data used to create many tools.
     */
    data: toolsCreateManyInput | toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tools update
   */
  export type toolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The data needed to update a tools.
     */
    data: XOR<toolsUpdateInput, toolsUncheckedUpdateInput>
    /**
     * Choose, which tools to update.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools updateMany
   */
  export type toolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolsUpdateManyMutationInput, toolsUncheckedUpdateManyInput>
    /**
     * Filter which tools to update
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to update.
     */
    limit?: number
  }

  /**
   * tools updateManyAndReturn
   */
  export type toolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * The data used to update tools.
     */
    data: XOR<toolsUpdateManyMutationInput, toolsUncheckedUpdateManyInput>
    /**
     * Filter which tools to update
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to update.
     */
    limit?: number
  }

  /**
   * tools upsert
   */
  export type toolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The filter to search for the tools to update in case it exists.
     */
    where: toolsWhereUniqueInput
    /**
     * In case the tools found by the `where` argument doesn't exist, create a new tools with this data.
     */
    create: XOR<toolsCreateInput, toolsUncheckedCreateInput>
    /**
     * In case the tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolsUpdateInput, toolsUncheckedUpdateInput>
  }

  /**
   * tools delete
   */
  export type toolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter which tools to delete.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools deleteMany
   */
  export type toolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to delete.
     */
    limit?: number
  }

  /**
   * tools.success_story_tools
   */
  export type tools$success_story_toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_story_tools
     */
    select?: success_story_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_story_tools
     */
    omit?: success_story_toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_story_toolsInclude<ExtArgs> | null
    where?: success_story_toolsWhereInput
    orderBy?: success_story_toolsOrderByWithRelationInput | success_story_toolsOrderByWithRelationInput[]
    cursor?: success_story_toolsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Success_story_toolsScalarFieldEnum | Success_story_toolsScalarFieldEnum[]
  }

  /**
   * tools without action
   */
  export type toolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    reset_password_token: string | null
    reset_password_expiration: Date | null
    salt: string | null
    name: string | null
    first_name: string | null
    last_name: string | null
    bio: string | null
    experience_level: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
    githubid: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    reset_password_token: string | null
    reset_password_expiration: Date | null
    salt: string | null
    name: string | null
    first_name: string | null
    last_name: string | null
    bio: string | null
    experience_level: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
    githubid: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    reset_password_token: number
    reset_password_expiration: number
    salt: number
    name: number
    first_name: number
    last_name: number
    bio: number
    experience_level: number
    avatar: number
    created_at: number
    updated_at: number
    githubid: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    reset_password_token?: true
    reset_password_expiration?: true
    salt?: true
    name?: true
    first_name?: true
    last_name?: true
    bio?: true
    experience_level?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    githubid?: true
    emailVerified?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    reset_password_token?: true
    reset_password_expiration?: true
    salt?: true
    name?: true
    first_name?: true
    last_name?: true
    bio?: true
    experience_level?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    githubid?: true
    emailVerified?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    reset_password_token?: true
    reset_password_expiration?: true
    salt?: true
    name?: true
    first_name?: true
    last_name?: true
    bio?: true
    experience_level?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    githubid?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    reset_password_token: string | null
    reset_password_expiration: Date | null
    salt: string | null
    name: string | null
    first_name: string | null
    last_name: string | null
    bio: string | null
    experience_level: string | null
    avatar: string | null
    created_at: Date
    updated_at: Date
    githubid: string | null
    emailVerified: Date | null
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    reset_password_token?: boolean
    reset_password_expiration?: boolean
    salt?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    bio?: boolean
    experience_level?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    githubid?: boolean
    emailVerified?: boolean
    image?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    success_stories?: boolean | users$success_storiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    reset_password_token?: boolean
    reset_password_expiration?: boolean
    salt?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    bio?: boolean
    experience_level?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    githubid?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    reset_password_token?: boolean
    reset_password_expiration?: boolean
    salt?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    bio?: boolean
    experience_level?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    githubid?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    reset_password_token?: boolean
    reset_password_expiration?: boolean
    salt?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    bio?: boolean
    experience_level?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    githubid?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "reset_password_token" | "reset_password_expiration" | "salt" | "name" | "first_name" | "last_name" | "bio" | "experience_level" | "avatar" | "created_at" | "updated_at" | "githubid" | "emailVerified" | "image", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    success_stories?: boolean | users$success_storiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      success_stories: Prisma.$success_storiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      reset_password_token: string | null
      reset_password_expiration: Date | null
      salt: string | null
      name: string | null
      first_name: string | null
      last_name: string | null
      bio: string | null
      experience_level: string | null
      avatar: string | null
      created_at: Date
      updated_at: Date
      githubid: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    success_stories<T extends users$success_storiesArgs<ExtArgs> = {}>(args?: Subset<T, users$success_storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$success_storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly reset_password_token: FieldRef<"users", 'String'>
    readonly reset_password_expiration: FieldRef<"users", 'DateTime'>
    readonly salt: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly experience_level: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly githubid: FieldRef<"users", 'String'>
    readonly emailVerified: FieldRef<"users", 'DateTime'>
    readonly image: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.success_stories
   */
  export type users$success_storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the success_stories
     */
    select?: success_storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the success_stories
     */
    omit?: success_storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: success_storiesInclude<ExtArgs> | null
    where?: success_storiesWhereInput
    orderBy?: success_storiesOrderByWithRelationInput | success_storiesOrderByWithRelationInput[]
    cursor?: success_storiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Success_storiesScalarFieldEnum | Success_storiesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model verification_token
   */

  export type AggregateVerification_token = {
    _count: Verification_tokenCountAggregateOutputType | null
    _min: Verification_tokenMinAggregateOutputType | null
    _max: Verification_tokenMaxAggregateOutputType | null
  }

  export type Verification_tokenMinAggregateOutputType = {
    identifier: string | null
    expires: Date | null
    token: string | null
  }

  export type Verification_tokenMaxAggregateOutputType = {
    identifier: string | null
    expires: Date | null
    token: string | null
  }

  export type Verification_tokenCountAggregateOutputType = {
    identifier: number
    expires: number
    token: number
    _all: number
  }


  export type Verification_tokenMinAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
  }

  export type Verification_tokenMaxAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
  }

  export type Verification_tokenCountAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
    _all?: true
  }

  export type Verification_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification_token to aggregate.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verification_tokens
    **/
    _count?: true | Verification_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verification_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verification_tokenMaxAggregateInputType
  }

  export type GetVerification_tokenAggregateType<T extends Verification_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification_token[P]>
      : GetScalarType<T[P], AggregateVerification_token[P]>
  }




  export type verification_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verification_tokenWhereInput
    orderBy?: verification_tokenOrderByWithAggregationInput | verification_tokenOrderByWithAggregationInput[]
    by: Verification_tokenScalarFieldEnum[] | Verification_tokenScalarFieldEnum
    having?: verification_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verification_tokenCountAggregateInputType | true
    _min?: Verification_tokenMinAggregateInputType
    _max?: Verification_tokenMaxAggregateInputType
  }

  export type Verification_tokenGroupByOutputType = {
    identifier: string
    expires: Date
    token: string
    _count: Verification_tokenCountAggregateOutputType | null
    _min: Verification_tokenMinAggregateOutputType | null
    _max: Verification_tokenMaxAggregateOutputType | null
  }

  type GetVerification_tokenGroupByPayload<T extends verification_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verification_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verification_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verification_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Verification_tokenGroupByOutputType[P]>
        }
      >
    >


  export type verification_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }, ExtArgs["result"]["verification_token"]>

  export type verification_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }, ExtArgs["result"]["verification_token"]>

  export type verification_tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }, ExtArgs["result"]["verification_token"]>

  export type verification_tokenSelectScalar = {
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }

  export type verification_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "expires" | "token", ExtArgs["result"]["verification_token"]>

  export type $verification_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verification_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      expires: Date
      token: string
    }, ExtArgs["result"]["verification_token"]>
    composites: {}
  }

  type verification_tokenGetPayload<S extends boolean | null | undefined | verification_tokenDefaultArgs> = $Result.GetResult<Prisma.$verification_tokenPayload, S>

  type verification_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verification_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verification_tokenCountAggregateInputType | true
    }

  export interface verification_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verification_token'], meta: { name: 'verification_token' } }
    /**
     * Find zero or one Verification_token that matches the filter.
     * @param {verification_tokenFindUniqueArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verification_tokenFindUniqueArgs>(args: SelectSubset<T, verification_tokenFindUniqueArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verification_tokenFindUniqueOrThrowArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verification_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, verification_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindFirstArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verification_tokenFindFirstArgs>(args?: SelectSubset<T, verification_tokenFindFirstArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindFirstOrThrowArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verification_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, verification_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verification_tokens
     * const verification_tokens = await prisma.verification_token.findMany()
     * 
     * // Get first 10 Verification_tokens
     * const verification_tokens = await prisma.verification_token.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verification_tokenWithIdentifierOnly = await prisma.verification_token.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends verification_tokenFindManyArgs>(args?: SelectSubset<T, verification_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification_token.
     * @param {verification_tokenCreateArgs} args - Arguments to create a Verification_token.
     * @example
     * // Create one Verification_token
     * const Verification_token = await prisma.verification_token.create({
     *   data: {
     *     // ... data to create a Verification_token
     *   }
     * })
     * 
     */
    create<T extends verification_tokenCreateArgs>(args: SelectSubset<T, verification_tokenCreateArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verification_tokens.
     * @param {verification_tokenCreateManyArgs} args - Arguments to create many Verification_tokens.
     * @example
     * // Create many Verification_tokens
     * const verification_token = await prisma.verification_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verification_tokenCreateManyArgs>(args?: SelectSubset<T, verification_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verification_tokens and returns the data saved in the database.
     * @param {verification_tokenCreateManyAndReturnArgs} args - Arguments to create many Verification_tokens.
     * @example
     * // Create many Verification_tokens
     * const verification_token = await prisma.verification_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verification_tokens and only return the `identifier`
     * const verification_tokenWithIdentifierOnly = await prisma.verification_token.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verification_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, verification_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification_token.
     * @param {verification_tokenDeleteArgs} args - Arguments to delete one Verification_token.
     * @example
     * // Delete one Verification_token
     * const Verification_token = await prisma.verification_token.delete({
     *   where: {
     *     // ... filter to delete one Verification_token
     *   }
     * })
     * 
     */
    delete<T extends verification_tokenDeleteArgs>(args: SelectSubset<T, verification_tokenDeleteArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification_token.
     * @param {verification_tokenUpdateArgs} args - Arguments to update one Verification_token.
     * @example
     * // Update one Verification_token
     * const verification_token = await prisma.verification_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verification_tokenUpdateArgs>(args: SelectSubset<T, verification_tokenUpdateArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verification_tokens.
     * @param {verification_tokenDeleteManyArgs} args - Arguments to filter Verification_tokens to delete.
     * @example
     * // Delete a few Verification_tokens
     * const { count } = await prisma.verification_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verification_tokenDeleteManyArgs>(args?: SelectSubset<T, verification_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verification_tokens
     * const verification_token = await prisma.verification_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verification_tokenUpdateManyArgs>(args: SelectSubset<T, verification_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tokens and returns the data updated in the database.
     * @param {verification_tokenUpdateManyAndReturnArgs} args - Arguments to update many Verification_tokens.
     * @example
     * // Update many Verification_tokens
     * const verification_token = await prisma.verification_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verification_tokens and only return the `identifier`
     * const verification_tokenWithIdentifierOnly = await prisma.verification_token.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends verification_tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, verification_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification_token.
     * @param {verification_tokenUpsertArgs} args - Arguments to update or create a Verification_token.
     * @example
     * // Update or create a Verification_token
     * const verification_token = await prisma.verification_token.upsert({
     *   create: {
     *     // ... data to create a Verification_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification_token we want to update
     *   }
     * })
     */
    upsert<T extends verification_tokenUpsertArgs>(args: SelectSubset<T, verification_tokenUpsertArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenCountArgs} args - Arguments to filter Verification_tokens to count.
     * @example
     * // Count the number of Verification_tokens
     * const count = await prisma.verification_token.count({
     *   where: {
     *     // ... the filter for the Verification_tokens we want to count
     *   }
     * })
    **/
    count<T extends verification_tokenCountArgs>(
      args?: Subset<T, verification_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verification_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Verification_tokenAggregateArgs>(args: Subset<T, Verification_tokenAggregateArgs>): Prisma.PrismaPromise<GetVerification_tokenAggregateType<T>>

    /**
     * Group by Verification_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenGroupByArgs} args - Group by arguments.
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
      T extends verification_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verification_tokenGroupByArgs['orderBy'] }
        : { orderBy?: verification_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, verification_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerification_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verification_token model
   */
  readonly fields: verification_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verification_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verification_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verification_token model
   */
  interface verification_tokenFieldRefs {
    readonly identifier: FieldRef<"verification_token", 'String'>
    readonly expires: FieldRef<"verification_token", 'DateTime'>
    readonly token: FieldRef<"verification_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * verification_token findUnique
   */
  export type verification_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token findUniqueOrThrow
   */
  export type verification_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token findFirst
   */
  export type verification_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verification_tokens.
     */
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token findFirstOrThrow
   */
  export type verification_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verification_tokens.
     */
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token findMany
   */
  export type verification_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter, which verification_tokens to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token create
   */
  export type verification_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * The data needed to create a verification_token.
     */
    data: XOR<verification_tokenCreateInput, verification_tokenUncheckedCreateInput>
  }

  /**
   * verification_token createMany
   */
  export type verification_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verification_tokens.
     */
    data: verification_tokenCreateManyInput | verification_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification_token createManyAndReturn
   */
  export type verification_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * The data used to create many verification_tokens.
     */
    data: verification_tokenCreateManyInput | verification_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification_token update
   */
  export type verification_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * The data needed to update a verification_token.
     */
    data: XOR<verification_tokenUpdateInput, verification_tokenUncheckedUpdateInput>
    /**
     * Choose, which verification_token to update.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token updateMany
   */
  export type verification_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verification_tokens.
     */
    data: XOR<verification_tokenUpdateManyMutationInput, verification_tokenUncheckedUpdateManyInput>
    /**
     * Filter which verification_tokens to update
     */
    where?: verification_tokenWhereInput
    /**
     * Limit how many verification_tokens to update.
     */
    limit?: number
  }

  /**
   * verification_token updateManyAndReturn
   */
  export type verification_tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * The data used to update verification_tokens.
     */
    data: XOR<verification_tokenUpdateManyMutationInput, verification_tokenUncheckedUpdateManyInput>
    /**
     * Filter which verification_tokens to update
     */
    where?: verification_tokenWhereInput
    /**
     * Limit how many verification_tokens to update.
     */
    limit?: number
  }

  /**
   * verification_token upsert
   */
  export type verification_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * The filter to search for the verification_token to update in case it exists.
     */
    where: verification_tokenWhereUniqueInput
    /**
     * In case the verification_token found by the `where` argument doesn't exist, create a new verification_token with this data.
     */
    create: XOR<verification_tokenCreateInput, verification_tokenUncheckedCreateInput>
    /**
     * In case the verification_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verification_tokenUpdateInput, verification_tokenUncheckedUpdateInput>
  }

  /**
   * verification_token delete
   */
  export type verification_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
    /**
     * Filter which verification_token to delete.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token deleteMany
   */
  export type verification_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification_tokens to delete
     */
    where?: verification_tokenWhereInput
    /**
     * Limit how many verification_tokens to delete.
     */
    limit?: number
  }

  /**
   * verification_token without action
   */
  export type verification_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verification_token
     */
    omit?: verification_tokenOmit<ExtArgs> | null
  }


  /**
   * Model vibe_tools
   */

  export type AggregateVibe_tools = {
    _count: Vibe_toolsCountAggregateOutputType | null
    _avg: Vibe_toolsAvgAggregateOutputType | null
    _sum: Vibe_toolsSumAggregateOutputType | null
    _min: Vibe_toolsMinAggregateOutputType | null
    _max: Vibe_toolsMaxAggregateOutputType | null
  }

  export type Vibe_toolsAvgAggregateOutputType = {
    id: number | null
  }

  export type Vibe_toolsSumAggregateOutputType = {
    id: number | null
  }

  export type Vibe_toolsMinAggregateOutputType = {
    id: number | null
    toolname: string | null
    description: string | null
    svgicon: string | null
  }

  export type Vibe_toolsMaxAggregateOutputType = {
    id: number | null
    toolname: string | null
    description: string | null
    svgicon: string | null
  }

  export type Vibe_toolsCountAggregateOutputType = {
    id: number
    toolname: number
    description: number
    svgicon: number
    _all: number
  }


  export type Vibe_toolsAvgAggregateInputType = {
    id?: true
  }

  export type Vibe_toolsSumAggregateInputType = {
    id?: true
  }

  export type Vibe_toolsMinAggregateInputType = {
    id?: true
    toolname?: true
    description?: true
    svgicon?: true
  }

  export type Vibe_toolsMaxAggregateInputType = {
    id?: true
    toolname?: true
    description?: true
    svgicon?: true
  }

  export type Vibe_toolsCountAggregateInputType = {
    id?: true
    toolname?: true
    description?: true
    svgicon?: true
    _all?: true
  }

  export type Vibe_toolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vibe_tools to aggregate.
     */
    where?: vibe_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vibe_tools to fetch.
     */
    orderBy?: vibe_toolsOrderByWithRelationInput | vibe_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vibe_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vibe_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vibe_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vibe_tools
    **/
    _count?: true | Vibe_toolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vibe_toolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vibe_toolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vibe_toolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vibe_toolsMaxAggregateInputType
  }

  export type GetVibe_toolsAggregateType<T extends Vibe_toolsAggregateArgs> = {
        [P in keyof T & keyof AggregateVibe_tools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVibe_tools[P]>
      : GetScalarType<T[P], AggregateVibe_tools[P]>
  }




  export type vibe_toolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vibe_toolsWhereInput
    orderBy?: vibe_toolsOrderByWithAggregationInput | vibe_toolsOrderByWithAggregationInput[]
    by: Vibe_toolsScalarFieldEnum[] | Vibe_toolsScalarFieldEnum
    having?: vibe_toolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vibe_toolsCountAggregateInputType | true
    _avg?: Vibe_toolsAvgAggregateInputType
    _sum?: Vibe_toolsSumAggregateInputType
    _min?: Vibe_toolsMinAggregateInputType
    _max?: Vibe_toolsMaxAggregateInputType
  }

  export type Vibe_toolsGroupByOutputType = {
    id: number
    toolname: string
    description: string | null
    svgicon: string | null
    _count: Vibe_toolsCountAggregateOutputType | null
    _avg: Vibe_toolsAvgAggregateOutputType | null
    _sum: Vibe_toolsSumAggregateOutputType | null
    _min: Vibe_toolsMinAggregateOutputType | null
    _max: Vibe_toolsMaxAggregateOutputType | null
  }

  type GetVibe_toolsGroupByPayload<T extends vibe_toolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vibe_toolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vibe_toolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vibe_toolsGroupByOutputType[P]>
            : GetScalarType<T[P], Vibe_toolsGroupByOutputType[P]>
        }
      >
    >


  export type vibe_toolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolname?: boolean
    description?: boolean
    svgicon?: boolean
  }, ExtArgs["result"]["vibe_tools"]>

  export type vibe_toolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolname?: boolean
    description?: boolean
    svgicon?: boolean
  }, ExtArgs["result"]["vibe_tools"]>

  export type vibe_toolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolname?: boolean
    description?: boolean
    svgicon?: boolean
  }, ExtArgs["result"]["vibe_tools"]>

  export type vibe_toolsSelectScalar = {
    id?: boolean
    toolname?: boolean
    description?: boolean
    svgicon?: boolean
  }

  export type vibe_toolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toolname" | "description" | "svgicon", ExtArgs["result"]["vibe_tools"]>

  export type $vibe_toolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vibe_tools"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      toolname: string
      description: string | null
      svgicon: string | null
    }, ExtArgs["result"]["vibe_tools"]>
    composites: {}
  }

  type vibe_toolsGetPayload<S extends boolean | null | undefined | vibe_toolsDefaultArgs> = $Result.GetResult<Prisma.$vibe_toolsPayload, S>

  type vibe_toolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vibe_toolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vibe_toolsCountAggregateInputType | true
    }

  export interface vibe_toolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vibe_tools'], meta: { name: 'vibe_tools' } }
    /**
     * Find zero or one Vibe_tools that matches the filter.
     * @param {vibe_toolsFindUniqueArgs} args - Arguments to find a Vibe_tools
     * @example
     * // Get one Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vibe_toolsFindUniqueArgs>(args: SelectSubset<T, vibe_toolsFindUniqueArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vibe_tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vibe_toolsFindUniqueOrThrowArgs} args - Arguments to find a Vibe_tools
     * @example
     * // Get one Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vibe_toolsFindUniqueOrThrowArgs>(args: SelectSubset<T, vibe_toolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vibe_tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsFindFirstArgs} args - Arguments to find a Vibe_tools
     * @example
     * // Get one Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vibe_toolsFindFirstArgs>(args?: SelectSubset<T, vibe_toolsFindFirstArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vibe_tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsFindFirstOrThrowArgs} args - Arguments to find a Vibe_tools
     * @example
     * // Get one Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vibe_toolsFindFirstOrThrowArgs>(args?: SelectSubset<T, vibe_toolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vibe_tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findMany()
     * 
     * // Get first 10 Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vibe_toolsWithIdOnly = await prisma.vibe_tools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vibe_toolsFindManyArgs>(args?: SelectSubset<T, vibe_toolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vibe_tools.
     * @param {vibe_toolsCreateArgs} args - Arguments to create a Vibe_tools.
     * @example
     * // Create one Vibe_tools
     * const Vibe_tools = await prisma.vibe_tools.create({
     *   data: {
     *     // ... data to create a Vibe_tools
     *   }
     * })
     * 
     */
    create<T extends vibe_toolsCreateArgs>(args: SelectSubset<T, vibe_toolsCreateArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vibe_tools.
     * @param {vibe_toolsCreateManyArgs} args - Arguments to create many Vibe_tools.
     * @example
     * // Create many Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vibe_toolsCreateManyArgs>(args?: SelectSubset<T, vibe_toolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vibe_tools and returns the data saved in the database.
     * @param {vibe_toolsCreateManyAndReturnArgs} args - Arguments to create many Vibe_tools.
     * @example
     * // Create many Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vibe_tools and only return the `id`
     * const vibe_toolsWithIdOnly = await prisma.vibe_tools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vibe_toolsCreateManyAndReturnArgs>(args?: SelectSubset<T, vibe_toolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vibe_tools.
     * @param {vibe_toolsDeleteArgs} args - Arguments to delete one Vibe_tools.
     * @example
     * // Delete one Vibe_tools
     * const Vibe_tools = await prisma.vibe_tools.delete({
     *   where: {
     *     // ... filter to delete one Vibe_tools
     *   }
     * })
     * 
     */
    delete<T extends vibe_toolsDeleteArgs>(args: SelectSubset<T, vibe_toolsDeleteArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vibe_tools.
     * @param {vibe_toolsUpdateArgs} args - Arguments to update one Vibe_tools.
     * @example
     * // Update one Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vibe_toolsUpdateArgs>(args: SelectSubset<T, vibe_toolsUpdateArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vibe_tools.
     * @param {vibe_toolsDeleteManyArgs} args - Arguments to filter Vibe_tools to delete.
     * @example
     * // Delete a few Vibe_tools
     * const { count } = await prisma.vibe_tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vibe_toolsDeleteManyArgs>(args?: SelectSubset<T, vibe_toolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vibe_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vibe_toolsUpdateManyArgs>(args: SelectSubset<T, vibe_toolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vibe_tools and returns the data updated in the database.
     * @param {vibe_toolsUpdateManyAndReturnArgs} args - Arguments to update many Vibe_tools.
     * @example
     * // Update many Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vibe_tools and only return the `id`
     * const vibe_toolsWithIdOnly = await prisma.vibe_tools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vibe_toolsUpdateManyAndReturnArgs>(args: SelectSubset<T, vibe_toolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vibe_tools.
     * @param {vibe_toolsUpsertArgs} args - Arguments to update or create a Vibe_tools.
     * @example
     * // Update or create a Vibe_tools
     * const vibe_tools = await prisma.vibe_tools.upsert({
     *   create: {
     *     // ... data to create a Vibe_tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vibe_tools we want to update
     *   }
     * })
     */
    upsert<T extends vibe_toolsUpsertArgs>(args: SelectSubset<T, vibe_toolsUpsertArgs<ExtArgs>>): Prisma__vibe_toolsClient<$Result.GetResult<Prisma.$vibe_toolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vibe_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsCountArgs} args - Arguments to filter Vibe_tools to count.
     * @example
     * // Count the number of Vibe_tools
     * const count = await prisma.vibe_tools.count({
     *   where: {
     *     // ... the filter for the Vibe_tools we want to count
     *   }
     * })
    **/
    count<T extends vibe_toolsCountArgs>(
      args?: Subset<T, vibe_toolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vibe_toolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vibe_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vibe_toolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vibe_toolsAggregateArgs>(args: Subset<T, Vibe_toolsAggregateArgs>): Prisma.PrismaPromise<GetVibe_toolsAggregateType<T>>

    /**
     * Group by Vibe_tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vibe_toolsGroupByArgs} args - Group by arguments.
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
      T extends vibe_toolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vibe_toolsGroupByArgs['orderBy'] }
        : { orderBy?: vibe_toolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, vibe_toolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVibe_toolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vibe_tools model
   */
  readonly fields: vibe_toolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vibe_tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vibe_toolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vibe_tools model
   */
  interface vibe_toolsFieldRefs {
    readonly id: FieldRef<"vibe_tools", 'Int'>
    readonly toolname: FieldRef<"vibe_tools", 'String'>
    readonly description: FieldRef<"vibe_tools", 'String'>
    readonly svgicon: FieldRef<"vibe_tools", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vibe_tools findUnique
   */
  export type vibe_toolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter, which vibe_tools to fetch.
     */
    where: vibe_toolsWhereUniqueInput
  }

  /**
   * vibe_tools findUniqueOrThrow
   */
  export type vibe_toolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter, which vibe_tools to fetch.
     */
    where: vibe_toolsWhereUniqueInput
  }

  /**
   * vibe_tools findFirst
   */
  export type vibe_toolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter, which vibe_tools to fetch.
     */
    where?: vibe_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vibe_tools to fetch.
     */
    orderBy?: vibe_toolsOrderByWithRelationInput | vibe_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vibe_tools.
     */
    cursor?: vibe_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vibe_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vibe_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vibe_tools.
     */
    distinct?: Vibe_toolsScalarFieldEnum | Vibe_toolsScalarFieldEnum[]
  }

  /**
   * vibe_tools findFirstOrThrow
   */
  export type vibe_toolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter, which vibe_tools to fetch.
     */
    where?: vibe_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vibe_tools to fetch.
     */
    orderBy?: vibe_toolsOrderByWithRelationInput | vibe_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vibe_tools.
     */
    cursor?: vibe_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vibe_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vibe_tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vibe_tools.
     */
    distinct?: Vibe_toolsScalarFieldEnum | Vibe_toolsScalarFieldEnum[]
  }

  /**
   * vibe_tools findMany
   */
  export type vibe_toolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter, which vibe_tools to fetch.
     */
    where?: vibe_toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vibe_tools to fetch.
     */
    orderBy?: vibe_toolsOrderByWithRelationInput | vibe_toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vibe_tools.
     */
    cursor?: vibe_toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vibe_tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vibe_tools.
     */
    skip?: number
    distinct?: Vibe_toolsScalarFieldEnum | Vibe_toolsScalarFieldEnum[]
  }

  /**
   * vibe_tools create
   */
  export type vibe_toolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * The data needed to create a vibe_tools.
     */
    data: XOR<vibe_toolsCreateInput, vibe_toolsUncheckedCreateInput>
  }

  /**
   * vibe_tools createMany
   */
  export type vibe_toolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vibe_tools.
     */
    data: vibe_toolsCreateManyInput | vibe_toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vibe_tools createManyAndReturn
   */
  export type vibe_toolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * The data used to create many vibe_tools.
     */
    data: vibe_toolsCreateManyInput | vibe_toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vibe_tools update
   */
  export type vibe_toolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * The data needed to update a vibe_tools.
     */
    data: XOR<vibe_toolsUpdateInput, vibe_toolsUncheckedUpdateInput>
    /**
     * Choose, which vibe_tools to update.
     */
    where: vibe_toolsWhereUniqueInput
  }

  /**
   * vibe_tools updateMany
   */
  export type vibe_toolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vibe_tools.
     */
    data: XOR<vibe_toolsUpdateManyMutationInput, vibe_toolsUncheckedUpdateManyInput>
    /**
     * Filter which vibe_tools to update
     */
    where?: vibe_toolsWhereInput
    /**
     * Limit how many vibe_tools to update.
     */
    limit?: number
  }

  /**
   * vibe_tools updateManyAndReturn
   */
  export type vibe_toolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * The data used to update vibe_tools.
     */
    data: XOR<vibe_toolsUpdateManyMutationInput, vibe_toolsUncheckedUpdateManyInput>
    /**
     * Filter which vibe_tools to update
     */
    where?: vibe_toolsWhereInput
    /**
     * Limit how many vibe_tools to update.
     */
    limit?: number
  }

  /**
   * vibe_tools upsert
   */
  export type vibe_toolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * The filter to search for the vibe_tools to update in case it exists.
     */
    where: vibe_toolsWhereUniqueInput
    /**
     * In case the vibe_tools found by the `where` argument doesn't exist, create a new vibe_tools with this data.
     */
    create: XOR<vibe_toolsCreateInput, vibe_toolsUncheckedCreateInput>
    /**
     * In case the vibe_tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vibe_toolsUpdateInput, vibe_toolsUncheckedUpdateInput>
  }

  /**
   * vibe_tools delete
   */
  export type vibe_toolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
    /**
     * Filter which vibe_tools to delete.
     */
    where: vibe_toolsWhereUniqueInput
  }

  /**
   * vibe_tools deleteMany
   */
  export type vibe_toolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vibe_tools to delete
     */
    where?: vibe_toolsWhereInput
    /**
     * Limit how many vibe_tools to delete.
     */
    limit?: number
  }

  /**
   * vibe_tools without action
   */
  export type vibe_toolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vibe_tools
     */
    select?: vibe_toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vibe_tools
     */
    omit?: vibe_toolsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    id_token: 'id_token',
    scope: 'scope',
    session_state: 'session_state',
    token_type: 'token_type'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    user_id: 'user_id',
    story_id: 'story_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const GlossaryScalarFieldEnum: {
    id: 'id',
    term: 'term',
    slug: 'slug',
    definition: 'definition',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GlossaryScalarFieldEnum = (typeof GlossaryScalarFieldEnum)[keyof typeof GlossaryScalarFieldEnum]


  export const Related_glossary_termsScalarFieldEnum: {
    term_id: 'term_id',
    related_term_id: 'related_term_id'
  };

  export type Related_glossary_termsScalarFieldEnum = (typeof Related_glossary_termsScalarFieldEnum)[keyof typeof Related_glossary_termsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Success_storiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    slug: 'slug',
    optional_url: 'optional_url',
    featured: 'featured',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Success_storiesScalarFieldEnum = (typeof Success_storiesScalarFieldEnum)[keyof typeof Success_storiesScalarFieldEnum]


  export const Success_story_toolsScalarFieldEnum: {
    story_id: 'story_id',
    tool_id: 'tool_id'
  };

  export type Success_story_toolsScalarFieldEnum = (typeof Success_story_toolsScalarFieldEnum)[keyof typeof Success_story_toolsScalarFieldEnum]


  export const ToolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon: 'icon',
    url: 'url',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ToolsScalarFieldEnum = (typeof ToolsScalarFieldEnum)[keyof typeof ToolsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    reset_password_token: 'reset_password_token',
    reset_password_expiration: 'reset_password_expiration',
    salt: 'salt',
    name: 'name',
    first_name: 'first_name',
    last_name: 'last_name',
    bio: 'bio',
    experience_level: 'experience_level',
    avatar: 'avatar',
    created_at: 'created_at',
    updated_at: 'updated_at',
    githubid: 'githubid',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Verification_tokenScalarFieldEnum: {
    identifier: 'identifier',
    expires: 'expires',
    token: 'token'
  };

  export type Verification_tokenScalarFieldEnum = (typeof Verification_tokenScalarFieldEnum)[keyof typeof Verification_tokenScalarFieldEnum]


  export const Vibe_toolsScalarFieldEnum: {
    id: 'id',
    toolname: 'toolname',
    description: 'description',
    svgicon: 'svgicon'
  };

  export type Vibe_toolsScalarFieldEnum = (typeof Vibe_toolsScalarFieldEnum)[keyof typeof Vibe_toolsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: IntFilter<"accounts"> | number
    userId?: IntFilter<"accounts"> | number
    type?: StringFilter<"accounts"> | string
    provider?: StringFilter<"accounts"> | string
    providerAccountId?: StringFilter<"accounts"> | string
    refresh_token?: StringNullableFilter<"accounts"> | string | null
    access_token?: StringNullableFilter<"accounts"> | string | null
    expires_at?: BigIntNullableFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableFilter<"accounts"> | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    session_state?: StringNullableFilter<"accounts"> | string | null
    token_type?: StringNullableFilter<"accounts"> | string | null
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    userId?: IntFilter<"accounts"> | number
    type?: StringFilter<"accounts"> | string
    provider?: StringFilter<"accounts"> | string
    providerAccountId?: StringFilter<"accounts"> | string
    refresh_token?: StringNullableFilter<"accounts"> | string | null
    access_token?: StringNullableFilter<"accounts"> | string | null
    expires_at?: BigIntNullableFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableFilter<"accounts"> | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    session_state?: StringNullableFilter<"accounts"> | string | null
    token_type?: StringNullableFilter<"accounts"> | string | null
  }, "id">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accounts"> | number
    userId?: IntWithAggregatesFilter<"accounts"> | number
    type?: StringWithAggregatesFilter<"accounts"> | string
    provider?: StringWithAggregatesFilter<"accounts"> | string
    providerAccountId?: StringWithAggregatesFilter<"accounts"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    expires_at?: BigIntNullableWithAggregatesFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    scope?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    token_type?: StringNullableWithAggregatesFilter<"accounts"> | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    user_id?: IntNullableFilter<"comments"> | number | null
    story_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    success_stories?: XOR<Success_storiesNullableScalarRelationFilter, success_storiesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrderInput | SortOrder
    story_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    success_stories?: success_storiesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    content?: StringFilter<"comments"> | string
    user_id?: IntNullableFilter<"comments"> | number | null
    story_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    success_stories?: XOR<Success_storiesNullableScalarRelationFilter, success_storiesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrderInput | SortOrder
    story_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    content?: StringWithAggregatesFilter<"comments"> | string
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    story_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
  }

  export type glossaryWhereInput = {
    AND?: glossaryWhereInput | glossaryWhereInput[]
    OR?: glossaryWhereInput[]
    NOT?: glossaryWhereInput | glossaryWhereInput[]
    id?: IntFilter<"glossary"> | number
    term?: StringFilter<"glossary"> | string
    slug?: StringFilter<"glossary"> | string
    definition?: StringFilter<"glossary"> | string
    created_at?: DateTimeFilter<"glossary"> | Date | string
    updated_at?: DateTimeFilter<"glossary"> | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: Related_glossary_termsListRelationFilter
    related_glossary_terms_related_glossary_terms_term_idToglossary?: Related_glossary_termsListRelationFilter
  }

  export type glossaryOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    slug?: SortOrder
    definition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsOrderByRelationAggregateInput
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsOrderByRelationAggregateInput
  }

  export type glossaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    term?: string
    slug?: string
    AND?: glossaryWhereInput | glossaryWhereInput[]
    OR?: glossaryWhereInput[]
    NOT?: glossaryWhereInput | glossaryWhereInput[]
    definition?: StringFilter<"glossary"> | string
    created_at?: DateTimeFilter<"glossary"> | Date | string
    updated_at?: DateTimeFilter<"glossary"> | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: Related_glossary_termsListRelationFilter
    related_glossary_terms_related_glossary_terms_term_idToglossary?: Related_glossary_termsListRelationFilter
  }, "id" | "term" | "slug">

  export type glossaryOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    slug?: SortOrder
    definition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: glossaryCountOrderByAggregateInput
    _avg?: glossaryAvgOrderByAggregateInput
    _max?: glossaryMaxOrderByAggregateInput
    _min?: glossaryMinOrderByAggregateInput
    _sum?: glossarySumOrderByAggregateInput
  }

  export type glossaryScalarWhereWithAggregatesInput = {
    AND?: glossaryScalarWhereWithAggregatesInput | glossaryScalarWhereWithAggregatesInput[]
    OR?: glossaryScalarWhereWithAggregatesInput[]
    NOT?: glossaryScalarWhereWithAggregatesInput | glossaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"glossary"> | number
    term?: StringWithAggregatesFilter<"glossary"> | string
    slug?: StringWithAggregatesFilter<"glossary"> | string
    definition?: StringWithAggregatesFilter<"glossary"> | string
    created_at?: DateTimeWithAggregatesFilter<"glossary"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"glossary"> | Date | string
  }

  export type related_glossary_termsWhereInput = {
    AND?: related_glossary_termsWhereInput | related_glossary_termsWhereInput[]
    OR?: related_glossary_termsWhereInput[]
    NOT?: related_glossary_termsWhereInput | related_glossary_termsWhereInput[]
    term_id?: IntFilter<"related_glossary_terms"> | number
    related_term_id?: IntFilter<"related_glossary_terms"> | number
    glossary_related_glossary_terms_related_term_idToglossary?: XOR<GlossaryScalarRelationFilter, glossaryWhereInput>
    glossary_related_glossary_terms_term_idToglossary?: XOR<GlossaryScalarRelationFilter, glossaryWhereInput>
  }

  export type related_glossary_termsOrderByWithRelationInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
    glossary_related_glossary_terms_related_term_idToglossary?: glossaryOrderByWithRelationInput
    glossary_related_glossary_terms_term_idToglossary?: glossaryOrderByWithRelationInput
  }

  export type related_glossary_termsWhereUniqueInput = Prisma.AtLeast<{
    term_id_related_term_id?: related_glossary_termsTerm_idRelated_term_idCompoundUniqueInput
    AND?: related_glossary_termsWhereInput | related_glossary_termsWhereInput[]
    OR?: related_glossary_termsWhereInput[]
    NOT?: related_glossary_termsWhereInput | related_glossary_termsWhereInput[]
    term_id?: IntFilter<"related_glossary_terms"> | number
    related_term_id?: IntFilter<"related_glossary_terms"> | number
    glossary_related_glossary_terms_related_term_idToglossary?: XOR<GlossaryScalarRelationFilter, glossaryWhereInput>
    glossary_related_glossary_terms_term_idToglossary?: XOR<GlossaryScalarRelationFilter, glossaryWhereInput>
  }, "term_id_related_term_id">

  export type related_glossary_termsOrderByWithAggregationInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
    _count?: related_glossary_termsCountOrderByAggregateInput
    _avg?: related_glossary_termsAvgOrderByAggregateInput
    _max?: related_glossary_termsMaxOrderByAggregateInput
    _min?: related_glossary_termsMinOrderByAggregateInput
    _sum?: related_glossary_termsSumOrderByAggregateInput
  }

  export type related_glossary_termsScalarWhereWithAggregatesInput = {
    AND?: related_glossary_termsScalarWhereWithAggregatesInput | related_glossary_termsScalarWhereWithAggregatesInput[]
    OR?: related_glossary_termsScalarWhereWithAggregatesInput[]
    NOT?: related_glossary_termsScalarWhereWithAggregatesInput | related_glossary_termsScalarWhereWithAggregatesInput[]
    term_id?: IntWithAggregatesFilter<"related_glossary_terms"> | number
    related_term_id?: IntWithAggregatesFilter<"related_glossary_terms"> | number
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    userId?: IntFilter<"sessions"> | number
    expires?: DateTimeFilter<"sessions"> | Date | string
    sessionToken?: StringFilter<"sessions"> | string
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    userId?: IntFilter<"sessions"> | number
    expires?: DateTimeFilter<"sessions"> | Date | string
    sessionToken?: StringFilter<"sessions"> | string
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    userId?: IntWithAggregatesFilter<"sessions"> | number
    expires?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    sessionToken?: StringWithAggregatesFilter<"sessions"> | string
  }

  export type success_storiesWhereInput = {
    AND?: success_storiesWhereInput | success_storiesWhereInput[]
    OR?: success_storiesWhereInput[]
    NOT?: success_storiesWhereInput | success_storiesWhereInput[]
    id?: IntFilter<"success_stories"> | number
    title?: StringFilter<"success_stories"> | string
    content?: StringFilter<"success_stories"> | string
    slug?: StringFilter<"success_stories"> | string
    optional_url?: StringNullableFilter<"success_stories"> | string | null
    featured?: BoolNullableFilter<"success_stories"> | boolean | null
    user_id?: IntNullableFilter<"success_stories"> | number | null
    created_at?: DateTimeFilter<"success_stories"> | Date | string
    updated_at?: DateTimeFilter<"success_stories"> | Date | string
    comments?: CommentsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    success_story_tools?: Success_story_toolsListRelationFilter
  }

  export type success_storiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    optional_url?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    success_story_tools?: success_story_toolsOrderByRelationAggregateInput
  }

  export type success_storiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: success_storiesWhereInput | success_storiesWhereInput[]
    OR?: success_storiesWhereInput[]
    NOT?: success_storiesWhereInput | success_storiesWhereInput[]
    title?: StringFilter<"success_stories"> | string
    content?: StringFilter<"success_stories"> | string
    optional_url?: StringNullableFilter<"success_stories"> | string | null
    featured?: BoolNullableFilter<"success_stories"> | boolean | null
    user_id?: IntNullableFilter<"success_stories"> | number | null
    created_at?: DateTimeFilter<"success_stories"> | Date | string
    updated_at?: DateTimeFilter<"success_stories"> | Date | string
    comments?: CommentsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    success_story_tools?: Success_story_toolsListRelationFilter
  }, "id" | "slug">

  export type success_storiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    optional_url?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: success_storiesCountOrderByAggregateInput
    _avg?: success_storiesAvgOrderByAggregateInput
    _max?: success_storiesMaxOrderByAggregateInput
    _min?: success_storiesMinOrderByAggregateInput
    _sum?: success_storiesSumOrderByAggregateInput
  }

  export type success_storiesScalarWhereWithAggregatesInput = {
    AND?: success_storiesScalarWhereWithAggregatesInput | success_storiesScalarWhereWithAggregatesInput[]
    OR?: success_storiesScalarWhereWithAggregatesInput[]
    NOT?: success_storiesScalarWhereWithAggregatesInput | success_storiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"success_stories"> | number
    title?: StringWithAggregatesFilter<"success_stories"> | string
    content?: StringWithAggregatesFilter<"success_stories"> | string
    slug?: StringWithAggregatesFilter<"success_stories"> | string
    optional_url?: StringNullableWithAggregatesFilter<"success_stories"> | string | null
    featured?: BoolNullableWithAggregatesFilter<"success_stories"> | boolean | null
    user_id?: IntNullableWithAggregatesFilter<"success_stories"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"success_stories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"success_stories"> | Date | string
  }

  export type success_story_toolsWhereInput = {
    AND?: success_story_toolsWhereInput | success_story_toolsWhereInput[]
    OR?: success_story_toolsWhereInput[]
    NOT?: success_story_toolsWhereInput | success_story_toolsWhereInput[]
    story_id?: IntFilter<"success_story_tools"> | number
    tool_id?: IntFilter<"success_story_tools"> | number
    success_stories?: XOR<Success_storiesScalarRelationFilter, success_storiesWhereInput>
    tools?: XOR<ToolsScalarRelationFilter, toolsWhereInput>
  }

  export type success_story_toolsOrderByWithRelationInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
    success_stories?: success_storiesOrderByWithRelationInput
    tools?: toolsOrderByWithRelationInput
  }

  export type success_story_toolsWhereUniqueInput = Prisma.AtLeast<{
    story_id_tool_id?: success_story_toolsStory_idTool_idCompoundUniqueInput
    AND?: success_story_toolsWhereInput | success_story_toolsWhereInput[]
    OR?: success_story_toolsWhereInput[]
    NOT?: success_story_toolsWhereInput | success_story_toolsWhereInput[]
    story_id?: IntFilter<"success_story_tools"> | number
    tool_id?: IntFilter<"success_story_tools"> | number
    success_stories?: XOR<Success_storiesScalarRelationFilter, success_storiesWhereInput>
    tools?: XOR<ToolsScalarRelationFilter, toolsWhereInput>
  }, "story_id_tool_id">

  export type success_story_toolsOrderByWithAggregationInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
    _count?: success_story_toolsCountOrderByAggregateInput
    _avg?: success_story_toolsAvgOrderByAggregateInput
    _max?: success_story_toolsMaxOrderByAggregateInput
    _min?: success_story_toolsMinOrderByAggregateInput
    _sum?: success_story_toolsSumOrderByAggregateInput
  }

  export type success_story_toolsScalarWhereWithAggregatesInput = {
    AND?: success_story_toolsScalarWhereWithAggregatesInput | success_story_toolsScalarWhereWithAggregatesInput[]
    OR?: success_story_toolsScalarWhereWithAggregatesInput[]
    NOT?: success_story_toolsScalarWhereWithAggregatesInput | success_story_toolsScalarWhereWithAggregatesInput[]
    story_id?: IntWithAggregatesFilter<"success_story_tools"> | number
    tool_id?: IntWithAggregatesFilter<"success_story_tools"> | number
  }

  export type toolsWhereInput = {
    AND?: toolsWhereInput | toolsWhereInput[]
    OR?: toolsWhereInput[]
    NOT?: toolsWhereInput | toolsWhereInput[]
    id?: IntFilter<"tools"> | number
    name?: StringFilter<"tools"> | string
    slug?: StringFilter<"tools"> | string
    description?: StringNullableFilter<"tools"> | string | null
    icon?: StringNullableFilter<"tools"> | string | null
    url?: StringNullableFilter<"tools"> | string | null
    category?: StringNullableFilter<"tools"> | string | null
    created_at?: DateTimeFilter<"tools"> | Date | string
    updated_at?: DateTimeFilter<"tools"> | Date | string
    success_story_tools?: Success_story_toolsListRelationFilter
  }

  export type toolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    success_story_tools?: success_story_toolsOrderByRelationAggregateInput
  }

  export type toolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: toolsWhereInput | toolsWhereInput[]
    OR?: toolsWhereInput[]
    NOT?: toolsWhereInput | toolsWhereInput[]
    name?: StringFilter<"tools"> | string
    description?: StringNullableFilter<"tools"> | string | null
    icon?: StringNullableFilter<"tools"> | string | null
    url?: StringNullableFilter<"tools"> | string | null
    category?: StringNullableFilter<"tools"> | string | null
    created_at?: DateTimeFilter<"tools"> | Date | string
    updated_at?: DateTimeFilter<"tools"> | Date | string
    success_story_tools?: Success_story_toolsListRelationFilter
  }, "id" | "slug">

  export type toolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: toolsCountOrderByAggregateInput
    _avg?: toolsAvgOrderByAggregateInput
    _max?: toolsMaxOrderByAggregateInput
    _min?: toolsMinOrderByAggregateInput
    _sum?: toolsSumOrderByAggregateInput
  }

  export type toolsScalarWhereWithAggregatesInput = {
    AND?: toolsScalarWhereWithAggregatesInput | toolsScalarWhereWithAggregatesInput[]
    OR?: toolsScalarWhereWithAggregatesInput[]
    NOT?: toolsScalarWhereWithAggregatesInput | toolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tools"> | number
    name?: StringWithAggregatesFilter<"tools"> | string
    slug?: StringWithAggregatesFilter<"tools"> | string
    description?: StringNullableWithAggregatesFilter<"tools"> | string | null
    icon?: StringNullableWithAggregatesFilter<"tools"> | string | null
    url?: StringNullableWithAggregatesFilter<"tools"> | string | null
    category?: StringNullableWithAggregatesFilter<"tools"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"tools"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tools"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    reset_password_token?: StringNullableFilter<"users"> | string | null
    reset_password_expiration?: DateTimeNullableFilter<"users"> | Date | string | null
    salt?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    experience_level?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    githubid?: StringNullableFilter<"users"> | string | null
    emailVerified?: DateTimeNullableFilter<"users"> | Date | string | null
    image?: StringNullableFilter<"users"> | string | null
    comments?: CommentsListRelationFilter
    success_stories?: Success_storiesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expiration?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    experience_level?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubid?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    success_stories?: success_storiesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    name?: string
    githubid?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    reset_password_token?: StringNullableFilter<"users"> | string | null
    reset_password_expiration?: DateTimeNullableFilter<"users"> | Date | string | null
    salt?: StringNullableFilter<"users"> | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    experience_level?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    emailVerified?: DateTimeNullableFilter<"users"> | Date | string | null
    image?: StringNullableFilter<"users"> | string | null
    comments?: CommentsListRelationFilter
    success_stories?: Success_storiesListRelationFilter
  }, "id" | "email" | "name" | "githubid">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expiration?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    experience_level?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubid?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    reset_password_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    reset_password_expiration?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    salt?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    experience_level?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    githubid?: StringNullableWithAggregatesFilter<"users"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type verification_tokenWhereInput = {
    AND?: verification_tokenWhereInput | verification_tokenWhereInput[]
    OR?: verification_tokenWhereInput[]
    NOT?: verification_tokenWhereInput | verification_tokenWhereInput[]
    identifier?: StringFilter<"verification_token"> | string
    expires?: DateTimeFilter<"verification_token"> | Date | string
    token?: StringFilter<"verification_token"> | string
  }

  export type verification_tokenOrderByWithRelationInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: verification_tokenIdentifierTokenCompoundUniqueInput
    AND?: verification_tokenWhereInput | verification_tokenWhereInput[]
    OR?: verification_tokenWhereInput[]
    NOT?: verification_tokenWhereInput | verification_tokenWhereInput[]
    identifier?: StringFilter<"verification_token"> | string
    expires?: DateTimeFilter<"verification_token"> | Date | string
    token?: StringFilter<"verification_token"> | string
  }, "identifier_token">

  export type verification_tokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
    _count?: verification_tokenCountOrderByAggregateInput
    _max?: verification_tokenMaxOrderByAggregateInput
    _min?: verification_tokenMinOrderByAggregateInput
  }

  export type verification_tokenScalarWhereWithAggregatesInput = {
    AND?: verification_tokenScalarWhereWithAggregatesInput | verification_tokenScalarWhereWithAggregatesInput[]
    OR?: verification_tokenScalarWhereWithAggregatesInput[]
    NOT?: verification_tokenScalarWhereWithAggregatesInput | verification_tokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"verification_token"> | string
    expires?: DateTimeWithAggregatesFilter<"verification_token"> | Date | string
    token?: StringWithAggregatesFilter<"verification_token"> | string
  }

  export type vibe_toolsWhereInput = {
    AND?: vibe_toolsWhereInput | vibe_toolsWhereInput[]
    OR?: vibe_toolsWhereInput[]
    NOT?: vibe_toolsWhereInput | vibe_toolsWhereInput[]
    id?: IntFilter<"vibe_tools"> | number
    toolname?: StringFilter<"vibe_tools"> | string
    description?: StringNullableFilter<"vibe_tools"> | string | null
    svgicon?: StringNullableFilter<"vibe_tools"> | string | null
  }

  export type vibe_toolsOrderByWithRelationInput = {
    id?: SortOrder
    toolname?: SortOrder
    description?: SortOrderInput | SortOrder
    svgicon?: SortOrderInput | SortOrder
  }

  export type vibe_toolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vibe_toolsWhereInput | vibe_toolsWhereInput[]
    OR?: vibe_toolsWhereInput[]
    NOT?: vibe_toolsWhereInput | vibe_toolsWhereInput[]
    toolname?: StringFilter<"vibe_tools"> | string
    description?: StringNullableFilter<"vibe_tools"> | string | null
    svgicon?: StringNullableFilter<"vibe_tools"> | string | null
  }, "id">

  export type vibe_toolsOrderByWithAggregationInput = {
    id?: SortOrder
    toolname?: SortOrder
    description?: SortOrderInput | SortOrder
    svgicon?: SortOrderInput | SortOrder
    _count?: vibe_toolsCountOrderByAggregateInput
    _avg?: vibe_toolsAvgOrderByAggregateInput
    _max?: vibe_toolsMaxOrderByAggregateInput
    _min?: vibe_toolsMinOrderByAggregateInput
    _sum?: vibe_toolsSumOrderByAggregateInput
  }

  export type vibe_toolsScalarWhereWithAggregatesInput = {
    AND?: vibe_toolsScalarWhereWithAggregatesInput | vibe_toolsScalarWhereWithAggregatesInput[]
    OR?: vibe_toolsScalarWhereWithAggregatesInput[]
    NOT?: vibe_toolsScalarWhereWithAggregatesInput | vibe_toolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vibe_tools"> | number
    toolname?: StringWithAggregatesFilter<"vibe_tools"> | string
    description?: StringNullableWithAggregatesFilter<"vibe_tools"> | string | null
    svgicon?: StringNullableWithAggregatesFilter<"vibe_tools"> | string | null
  }

  export type accountsCreateInput = {
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsCreateManyInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    success_stories?: success_storiesCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    content: string
    user_id?: number | null
    story_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    success_stories?: success_storiesUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    story_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateManyInput = {
    id?: number
    content: string
    user_id?: number | null
    story_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    story_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type glossaryCreateInput = {
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput
  }

  export type glossaryUncheckedCreateInput = {
    id?: number
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput
  }

  export type glossaryUpdateInput = {
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type glossaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type glossaryCreateManyInput = {
    id?: number
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type glossaryUpdateManyMutationInput = {
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type glossaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type related_glossary_termsCreateInput = {
    glossary_related_glossary_terms_related_term_idToglossary: glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput
    glossary_related_glossary_terms_term_idToglossary: glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput
  }

  export type related_glossary_termsUncheckedCreateInput = {
    term_id: number
    related_term_id: number
  }

  export type related_glossary_termsUpdateInput = {
    glossary_related_glossary_terms_related_term_idToglossary?: glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryNestedInput
    glossary_related_glossary_terms_term_idToglossary?: glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type related_glossary_termsUncheckedUpdateInput = {
    term_id?: IntFieldUpdateOperationsInput | number
    related_term_id?: IntFieldUpdateOperationsInput | number
  }

  export type related_glossary_termsCreateManyInput = {
    term_id: number
    related_term_id: number
  }

  export type related_glossary_termsUpdateManyMutationInput = {

  }

  export type related_glossary_termsUncheckedUpdateManyInput = {
    term_id?: IntFieldUpdateOperationsInput | number
    related_term_id?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateInput = {
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateManyInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type success_storiesCreateInput = {
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutSuccess_storiesInput
    users?: usersCreateNestedOneWithoutSuccess_storiesInput
    success_story_tools?: success_story_toolsCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutSuccess_storiesInput
    success_story_tools?: success_story_toolsUncheckedCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutSuccess_storiesNestedInput
    users?: usersUpdateOneWithoutSuccess_storiesNestedInput
    success_story_tools?: success_story_toolsUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type success_storiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
    success_story_tools?: success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type success_storiesCreateManyInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type success_storiesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type success_storiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type success_story_toolsCreateInput = {
    success_stories: success_storiesCreateNestedOneWithoutSuccess_story_toolsInput
    tools: toolsCreateNestedOneWithoutSuccess_story_toolsInput
  }

  export type success_story_toolsUncheckedCreateInput = {
    story_id: number
    tool_id: number
  }

  export type success_story_toolsUpdateInput = {
    success_stories?: success_storiesUpdateOneRequiredWithoutSuccess_story_toolsNestedInput
    tools?: toolsUpdateOneRequiredWithoutSuccess_story_toolsNestedInput
  }

  export type success_story_toolsUncheckedUpdateInput = {
    story_id?: IntFieldUpdateOperationsInput | number
    tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type success_story_toolsCreateManyInput = {
    story_id: number
    tool_id: number
  }

  export type success_story_toolsUpdateManyMutationInput = {

  }

  export type success_story_toolsUncheckedUpdateManyInput = {
    story_id?: IntFieldUpdateOperationsInput | number
    tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type toolsCreateInput = {
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    success_story_tools?: success_story_toolsCreateNestedManyWithoutToolsInput
  }

  export type toolsUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    success_story_tools?: success_story_toolsUncheckedCreateNestedManyWithoutToolsInput
  }

  export type toolsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    success_story_tools?: success_story_toolsUpdateManyWithoutToolsNestedInput
  }

  export type toolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    success_story_tools?: success_story_toolsUncheckedUpdateManyWithoutToolsNestedInput
  }

  export type toolsCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type toolsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    success_stories?: success_storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    success_stories?: success_storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    success_stories?: success_storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    success_stories?: success_storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type verification_tokenCreateInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUncheckedCreateInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenCreateManyInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type vibe_toolsCreateInput = {
    toolname: string
    description?: string | null
    svgicon?: string | null
  }

  export type vibe_toolsUncheckedCreateInput = {
    id?: number
    toolname: string
    description?: string | null
    svgicon?: string | null
  }

  export type vibe_toolsUpdateInput = {
    toolname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    svgicon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vibe_toolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    toolname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    svgicon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vibe_toolsCreateManyInput = {
    id?: number
    toolname: string
    description?: string | null
    svgicon?: string | null
  }

  export type vibe_toolsUpdateManyMutationInput = {
    toolname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    svgicon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vibe_toolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    toolname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    svgicon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Success_storiesNullableScalarRelationFilter = {
    is?: success_storiesWhereInput | null
    isNot?: success_storiesWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    story_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    story_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    story_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    story_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    story_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Related_glossary_termsListRelationFilter = {
    every?: related_glossary_termsWhereInput
    some?: related_glossary_termsWhereInput
    none?: related_glossary_termsWhereInput
  }

  export type related_glossary_termsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type glossaryCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    slug?: SortOrder
    definition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type glossaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type glossaryMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    slug?: SortOrder
    definition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type glossaryMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    slug?: SortOrder
    definition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type glossarySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GlossaryScalarRelationFilter = {
    is?: glossaryWhereInput
    isNot?: glossaryWhereInput
  }

  export type related_glossary_termsTerm_idRelated_term_idCompoundUniqueInput = {
    term_id: number
    related_term_id: number
  }

  export type related_glossary_termsCountOrderByAggregateInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
  }

  export type related_glossary_termsAvgOrderByAggregateInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
  }

  export type related_glossary_termsMaxOrderByAggregateInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
  }

  export type related_glossary_termsMinOrderByAggregateInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
  }

  export type related_glossary_termsSumOrderByAggregateInput = {
    term_id?: SortOrder
    related_term_id?: SortOrder
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Success_story_toolsListRelationFilter = {
    every?: success_story_toolsWhereInput
    some?: success_story_toolsWhereInput
    none?: success_story_toolsWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type success_story_toolsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type success_storiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    optional_url?: SortOrder
    featured?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type success_storiesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type success_storiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    optional_url?: SortOrder
    featured?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type success_storiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    optional_url?: SortOrder
    featured?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type success_storiesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Success_storiesScalarRelationFilter = {
    is?: success_storiesWhereInput
    isNot?: success_storiesWhereInput
  }

  export type ToolsScalarRelationFilter = {
    is?: toolsWhereInput
    isNot?: toolsWhereInput
  }

  export type success_story_toolsStory_idTool_idCompoundUniqueInput = {
    story_id: number
    tool_id: number
  }

  export type success_story_toolsCountOrderByAggregateInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
  }

  export type success_story_toolsAvgOrderByAggregateInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
  }

  export type success_story_toolsMaxOrderByAggregateInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
  }

  export type success_story_toolsMinOrderByAggregateInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
  }

  export type success_story_toolsSumOrderByAggregateInput = {
    story_id?: SortOrder
    tool_id?: SortOrder
  }

  export type toolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type toolsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type toolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type toolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    url?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type toolsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Success_storiesListRelationFilter = {
    every?: success_storiesWhereInput
    some?: success_storiesWhereInput
    none?: success_storiesWhereInput
  }

  export type success_storiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expiration?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    bio?: SortOrder
    experience_level?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubid?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expiration?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    bio?: SortOrder
    experience_level?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubid?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expiration?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    bio?: SortOrder
    experience_level?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubid?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type verification_tokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type verification_tokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type vibe_toolsCountOrderByAggregateInput = {
    id?: SortOrder
    toolname?: SortOrder
    description?: SortOrder
    svgicon?: SortOrder
  }

  export type vibe_toolsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vibe_toolsMaxOrderByAggregateInput = {
    id?: SortOrder
    toolname?: SortOrder
    description?: SortOrder
    svgicon?: SortOrder
  }

  export type vibe_toolsMinOrderByAggregateInput = {
    id?: SortOrder
    toolname?: SortOrder
    description?: SortOrder
    svgicon?: SortOrder
  }

  export type vibe_toolsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type success_storiesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<success_storiesCreateWithoutCommentsInput, success_storiesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: success_storiesCreateOrConnectWithoutCommentsInput
    connect?: success_storiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type success_storiesUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<success_storiesCreateWithoutCommentsInput, success_storiesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: success_storiesCreateOrConnectWithoutCommentsInput
    upsert?: success_storiesUpsertWithoutCommentsInput
    disconnect?: success_storiesWhereInput | boolean
    delete?: success_storiesWhereInput | boolean
    connect?: success_storiesWhereUniqueInput
    update?: XOR<XOR<success_storiesUpdateToOneWithWhereWithoutCommentsInput, success_storiesUpdateWithoutCommentsInput>, success_storiesUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInputEnvelope
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
  }

  export type related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInputEnvelope
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
  }

  export type related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInputEnvelope
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
  }

  export type related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInputEnvelope
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
  }

  export type related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    upsert?: related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInputEnvelope
    set?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    disconnect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    delete?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    update?: related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    updateMany?: related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    deleteMany?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
  }

  export type related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    upsert?: related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInputEnvelope
    set?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    disconnect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    delete?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    update?: related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    updateMany?: related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    deleteMany?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
  }

  export type related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    upsert?: related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInputEnvelope
    set?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    disconnect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    delete?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    update?: related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    updateMany?: related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    deleteMany?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
  }

  export type related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput = {
    create?: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput> | related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[] | related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    connectOrCreate?: related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    upsert?: related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    createMany?: related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInputEnvelope
    set?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    disconnect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    delete?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    connect?: related_glossary_termsWhereUniqueInput | related_glossary_termsWhereUniqueInput[]
    update?: related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    updateMany?: related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_term_idToglossaryInput[]
    deleteMany?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
  }

  export type glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    create?: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
    connectOrCreate?: glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput
    connect?: glossaryWhereUniqueInput
  }

  export type glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    create?: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
    connectOrCreate?: glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput
    connect?: glossaryWhereUniqueInput
  }

  export type glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryNestedInput = {
    create?: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
    connectOrCreate?: glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput
    upsert?: glossaryUpsertWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput
    connect?: glossaryWhereUniqueInput
    update?: XOR<XOR<glossaryUpdateToOneWithWhereWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryNestedInput = {
    create?: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
    connectOrCreate?: glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput
    upsert?: glossaryUpsertWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput
    connect?: glossaryWhereUniqueInput
    update?: XOR<XOR<glossaryUpdateToOneWithWhereWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
  }

  export type commentsCreateNestedManyWithoutSuccess_storiesInput = {
    create?: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput> | commentsCreateWithoutSuccess_storiesInput[] | commentsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSuccess_storiesInput | commentsCreateOrConnectWithoutSuccess_storiesInput[]
    createMany?: commentsCreateManySuccess_storiesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSuccess_storiesInput = {
    create?: XOR<usersCreateWithoutSuccess_storiesInput, usersUncheckedCreateWithoutSuccess_storiesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSuccess_storiesInput
    connect?: usersWhereUniqueInput
  }

  export type success_story_toolsCreateNestedManyWithoutSuccess_storiesInput = {
    create?: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput> | success_story_toolsCreateWithoutSuccess_storiesInput[] | success_story_toolsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutSuccess_storiesInput | success_story_toolsCreateOrConnectWithoutSuccess_storiesInput[]
    createMany?: success_story_toolsCreateManySuccess_storiesInputEnvelope
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutSuccess_storiesInput = {
    create?: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput> | commentsCreateWithoutSuccess_storiesInput[] | commentsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSuccess_storiesInput | commentsCreateOrConnectWithoutSuccess_storiesInput[]
    createMany?: commentsCreateManySuccess_storiesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type success_story_toolsUncheckedCreateNestedManyWithoutSuccess_storiesInput = {
    create?: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput> | success_story_toolsCreateWithoutSuccess_storiesInput[] | success_story_toolsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutSuccess_storiesInput | success_story_toolsCreateOrConnectWithoutSuccess_storiesInput[]
    createMany?: success_story_toolsCreateManySuccess_storiesInputEnvelope
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type commentsUpdateManyWithoutSuccess_storiesNestedInput = {
    create?: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput> | commentsCreateWithoutSuccess_storiesInput[] | commentsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSuccess_storiesInput | commentsCreateOrConnectWithoutSuccess_storiesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSuccess_storiesInput | commentsUpsertWithWhereUniqueWithoutSuccess_storiesInput[]
    createMany?: commentsCreateManySuccess_storiesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSuccess_storiesInput | commentsUpdateWithWhereUniqueWithoutSuccess_storiesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSuccess_storiesInput | commentsUpdateManyWithWhereWithoutSuccess_storiesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutSuccess_storiesNestedInput = {
    create?: XOR<usersCreateWithoutSuccess_storiesInput, usersUncheckedCreateWithoutSuccess_storiesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSuccess_storiesInput
    upsert?: usersUpsertWithoutSuccess_storiesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSuccess_storiesInput, usersUpdateWithoutSuccess_storiesInput>, usersUncheckedUpdateWithoutSuccess_storiesInput>
  }

  export type success_story_toolsUpdateManyWithoutSuccess_storiesNestedInput = {
    create?: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput> | success_story_toolsCreateWithoutSuccess_storiesInput[] | success_story_toolsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutSuccess_storiesInput | success_story_toolsCreateOrConnectWithoutSuccess_storiesInput[]
    upsert?: success_story_toolsUpsertWithWhereUniqueWithoutSuccess_storiesInput | success_story_toolsUpsertWithWhereUniqueWithoutSuccess_storiesInput[]
    createMany?: success_story_toolsCreateManySuccess_storiesInputEnvelope
    set?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    disconnect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    delete?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    update?: success_story_toolsUpdateWithWhereUniqueWithoutSuccess_storiesInput | success_story_toolsUpdateWithWhereUniqueWithoutSuccess_storiesInput[]
    updateMany?: success_story_toolsUpdateManyWithWhereWithoutSuccess_storiesInput | success_story_toolsUpdateManyWithWhereWithoutSuccess_storiesInput[]
    deleteMany?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutSuccess_storiesNestedInput = {
    create?: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput> | commentsCreateWithoutSuccess_storiesInput[] | commentsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSuccess_storiesInput | commentsCreateOrConnectWithoutSuccess_storiesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSuccess_storiesInput | commentsUpsertWithWhereUniqueWithoutSuccess_storiesInput[]
    createMany?: commentsCreateManySuccess_storiesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSuccess_storiesInput | commentsUpdateWithWhereUniqueWithoutSuccess_storiesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSuccess_storiesInput | commentsUpdateManyWithWhereWithoutSuccess_storiesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesNestedInput = {
    create?: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput> | success_story_toolsCreateWithoutSuccess_storiesInput[] | success_story_toolsUncheckedCreateWithoutSuccess_storiesInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutSuccess_storiesInput | success_story_toolsCreateOrConnectWithoutSuccess_storiesInput[]
    upsert?: success_story_toolsUpsertWithWhereUniqueWithoutSuccess_storiesInput | success_story_toolsUpsertWithWhereUniqueWithoutSuccess_storiesInput[]
    createMany?: success_story_toolsCreateManySuccess_storiesInputEnvelope
    set?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    disconnect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    delete?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    update?: success_story_toolsUpdateWithWhereUniqueWithoutSuccess_storiesInput | success_story_toolsUpdateWithWhereUniqueWithoutSuccess_storiesInput[]
    updateMany?: success_story_toolsUpdateManyWithWhereWithoutSuccess_storiesInput | success_story_toolsUpdateManyWithWhereWithoutSuccess_storiesInput[]
    deleteMany?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
  }

  export type success_storiesCreateNestedOneWithoutSuccess_story_toolsInput = {
    create?: XOR<success_storiesCreateWithoutSuccess_story_toolsInput, success_storiesUncheckedCreateWithoutSuccess_story_toolsInput>
    connectOrCreate?: success_storiesCreateOrConnectWithoutSuccess_story_toolsInput
    connect?: success_storiesWhereUniqueInput
  }

  export type toolsCreateNestedOneWithoutSuccess_story_toolsInput = {
    create?: XOR<toolsCreateWithoutSuccess_story_toolsInput, toolsUncheckedCreateWithoutSuccess_story_toolsInput>
    connectOrCreate?: toolsCreateOrConnectWithoutSuccess_story_toolsInput
    connect?: toolsWhereUniqueInput
  }

  export type success_storiesUpdateOneRequiredWithoutSuccess_story_toolsNestedInput = {
    create?: XOR<success_storiesCreateWithoutSuccess_story_toolsInput, success_storiesUncheckedCreateWithoutSuccess_story_toolsInput>
    connectOrCreate?: success_storiesCreateOrConnectWithoutSuccess_story_toolsInput
    upsert?: success_storiesUpsertWithoutSuccess_story_toolsInput
    connect?: success_storiesWhereUniqueInput
    update?: XOR<XOR<success_storiesUpdateToOneWithWhereWithoutSuccess_story_toolsInput, success_storiesUpdateWithoutSuccess_story_toolsInput>, success_storiesUncheckedUpdateWithoutSuccess_story_toolsInput>
  }

  export type toolsUpdateOneRequiredWithoutSuccess_story_toolsNestedInput = {
    create?: XOR<toolsCreateWithoutSuccess_story_toolsInput, toolsUncheckedCreateWithoutSuccess_story_toolsInput>
    connectOrCreate?: toolsCreateOrConnectWithoutSuccess_story_toolsInput
    upsert?: toolsUpsertWithoutSuccess_story_toolsInput
    connect?: toolsWhereUniqueInput
    update?: XOR<XOR<toolsUpdateToOneWithWhereWithoutSuccess_story_toolsInput, toolsUpdateWithoutSuccess_story_toolsInput>, toolsUncheckedUpdateWithoutSuccess_story_toolsInput>
  }

  export type success_story_toolsCreateNestedManyWithoutToolsInput = {
    create?: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput> | success_story_toolsCreateWithoutToolsInput[] | success_story_toolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutToolsInput | success_story_toolsCreateOrConnectWithoutToolsInput[]
    createMany?: success_story_toolsCreateManyToolsInputEnvelope
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
  }

  export type success_story_toolsUncheckedCreateNestedManyWithoutToolsInput = {
    create?: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput> | success_story_toolsCreateWithoutToolsInput[] | success_story_toolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutToolsInput | success_story_toolsCreateOrConnectWithoutToolsInput[]
    createMany?: success_story_toolsCreateManyToolsInputEnvelope
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
  }

  export type success_story_toolsUpdateManyWithoutToolsNestedInput = {
    create?: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput> | success_story_toolsCreateWithoutToolsInput[] | success_story_toolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutToolsInput | success_story_toolsCreateOrConnectWithoutToolsInput[]
    upsert?: success_story_toolsUpsertWithWhereUniqueWithoutToolsInput | success_story_toolsUpsertWithWhereUniqueWithoutToolsInput[]
    createMany?: success_story_toolsCreateManyToolsInputEnvelope
    set?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    disconnect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    delete?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    update?: success_story_toolsUpdateWithWhereUniqueWithoutToolsInput | success_story_toolsUpdateWithWhereUniqueWithoutToolsInput[]
    updateMany?: success_story_toolsUpdateManyWithWhereWithoutToolsInput | success_story_toolsUpdateManyWithWhereWithoutToolsInput[]
    deleteMany?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
  }

  export type success_story_toolsUncheckedUpdateManyWithoutToolsNestedInput = {
    create?: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput> | success_story_toolsCreateWithoutToolsInput[] | success_story_toolsUncheckedCreateWithoutToolsInput[]
    connectOrCreate?: success_story_toolsCreateOrConnectWithoutToolsInput | success_story_toolsCreateOrConnectWithoutToolsInput[]
    upsert?: success_story_toolsUpsertWithWhereUniqueWithoutToolsInput | success_story_toolsUpsertWithWhereUniqueWithoutToolsInput[]
    createMany?: success_story_toolsCreateManyToolsInputEnvelope
    set?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    disconnect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    delete?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    connect?: success_story_toolsWhereUniqueInput | success_story_toolsWhereUniqueInput[]
    update?: success_story_toolsUpdateWithWhereUniqueWithoutToolsInput | success_story_toolsUpdateWithWhereUniqueWithoutToolsInput[]
    updateMany?: success_story_toolsUpdateManyWithWhereWithoutToolsInput | success_story_toolsUpdateManyWithWhereWithoutToolsInput[]
    deleteMany?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type success_storiesCreateNestedManyWithoutUsersInput = {
    create?: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput> | success_storiesCreateWithoutUsersInput[] | success_storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: success_storiesCreateOrConnectWithoutUsersInput | success_storiesCreateOrConnectWithoutUsersInput[]
    createMany?: success_storiesCreateManyUsersInputEnvelope
    connect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type success_storiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput> | success_storiesCreateWithoutUsersInput[] | success_storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: success_storiesCreateOrConnectWithoutUsersInput | success_storiesCreateOrConnectWithoutUsersInput[]
    createMany?: success_storiesCreateManyUsersInputEnvelope
    connect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type success_storiesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput> | success_storiesCreateWithoutUsersInput[] | success_storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: success_storiesCreateOrConnectWithoutUsersInput | success_storiesCreateOrConnectWithoutUsersInput[]
    upsert?: success_storiesUpsertWithWhereUniqueWithoutUsersInput | success_storiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: success_storiesCreateManyUsersInputEnvelope
    set?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    disconnect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    delete?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    connect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    update?: success_storiesUpdateWithWhereUniqueWithoutUsersInput | success_storiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: success_storiesUpdateManyWithWhereWithoutUsersInput | success_storiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: success_storiesScalarWhereInput | success_storiesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type success_storiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput> | success_storiesCreateWithoutUsersInput[] | success_storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: success_storiesCreateOrConnectWithoutUsersInput | success_storiesCreateOrConnectWithoutUsersInput[]
    upsert?: success_storiesUpsertWithWhereUniqueWithoutUsersInput | success_storiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: success_storiesCreateManyUsersInputEnvelope
    set?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    disconnect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    delete?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    connect?: success_storiesWhereUniqueInput | success_storiesWhereUniqueInput[]
    update?: success_storiesUpdateWithWhereUniqueWithoutUsersInput | success_storiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: success_storiesUpdateManyWithWhereWithoutUsersInput | success_storiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: success_storiesScalarWhereInput | success_storiesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type success_storiesCreateWithoutCommentsInput = {
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedOneWithoutSuccess_storiesInput
    success_story_tools?: success_story_toolsCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    success_story_tools?: success_story_toolsUncheckedCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesCreateOrConnectWithoutCommentsInput = {
    where: success_storiesWhereUniqueInput
    create: XOR<success_storiesCreateWithoutCommentsInput, success_storiesUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    success_stories?: success_storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    success_stories?: success_storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type success_storiesUpsertWithoutCommentsInput = {
    update: XOR<success_storiesUpdateWithoutCommentsInput, success_storiesUncheckedUpdateWithoutCommentsInput>
    create: XOR<success_storiesCreateWithoutCommentsInput, success_storiesUncheckedCreateWithoutCommentsInput>
    where?: success_storiesWhereInput
  }

  export type success_storiesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: success_storiesWhereInput
    data: XOR<success_storiesUpdateWithoutCommentsInput, success_storiesUncheckedUpdateWithoutCommentsInput>
  }

  export type success_storiesUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutSuccess_storiesNestedInput
    success_story_tools?: success_story_toolsUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type success_storiesUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    success_story_tools?: success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    success_stories?: success_storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    success_stories?: success_storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    glossary_related_glossary_terms_term_idToglossary: glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput
  }

  export type related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    term_id: number
  }

  export type related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    create: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInputEnvelope = {
    data: related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInput | related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInput[]
    skipDuplicates?: boolean
  }

  export type related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    glossary_related_glossary_terms_related_term_idToglossary: glossaryCreateNestedOneWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput
  }

  export type related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    related_term_id: number
  }

  export type related_glossary_termsCreateOrConnectWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    create: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput>
  }

  export type related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInputEnvelope = {
    data: related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInput | related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInput[]
    skipDuplicates?: boolean
  }

  export type related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    update: XOR<related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput>
    create: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    data: XOR<related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput, related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    where: related_glossary_termsScalarWhereInput
    data: XOR<related_glossary_termsUpdateManyMutationInput, related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type related_glossary_termsScalarWhereInput = {
    AND?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
    OR?: related_glossary_termsScalarWhereInput[]
    NOT?: related_glossary_termsScalarWhereInput | related_glossary_termsScalarWhereInput[]
    term_id?: IntFilter<"related_glossary_terms"> | number
    related_term_id?: IntFilter<"related_glossary_terms"> | number
  }

  export type related_glossary_termsUpsertWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    update: XOR<related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput>
    create: XOR<related_glossary_termsCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedCreateWithoutGlossary_related_glossary_terms_term_idToglossaryInput>
  }

  export type related_glossary_termsUpdateWithWhereUniqueWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    where: related_glossary_termsWhereUniqueInput
    data: XOR<related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput, related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput>
  }

  export type related_glossary_termsUpdateManyWithWhereWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    where: related_glossary_termsScalarWhereInput
    data: XOR<related_glossary_termsUpdateManyMutationInput, related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput>
  }

  export type glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput
  }

  export type glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    id?: number
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput
  }

  export type glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    where: glossaryWhereUniqueInput
    create: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput
  }

  export type glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    id?: number
    term: string
    slug: string
    definition: string
    created_at?: Date | string
    updated_at?: Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUncheckedCreateNestedManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput
  }

  export type glossaryCreateOrConnectWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    where: glossaryWhereUniqueInput
    create: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
  }

  export type glossaryUpsertWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    update: XOR<glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
    create: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
    where?: glossaryWhereInput
  }

  export type glossaryUpdateToOneWithWhereWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    where?: glossaryWhereInput
    data: XOR<glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput>
  }

  export type glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_term_idToglossary?: related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type glossaryUpsertWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    update: XOR<glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
    create: XOR<glossaryCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedCreateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
    where?: glossaryWhereInput
  }

  export type glossaryUpdateToOneWithWhereWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    where?: glossaryWhereInput
    data: XOR<glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput, glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput>
  }

  export type glossaryUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput
  }

  export type glossaryUncheckedUpdateWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    related_glossary_terms_related_glossary_terms_related_term_idToglossary?: related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryNestedInput
  }

  export type commentsCreateWithoutSuccess_storiesInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutSuccess_storiesInput = {
    id?: number
    content: string
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsCreateOrConnectWithoutSuccess_storiesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput>
  }

  export type commentsCreateManySuccess_storiesInputEnvelope = {
    data: commentsCreateManySuccess_storiesInput | commentsCreateManySuccess_storiesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSuccess_storiesInput = {
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSuccess_storiesInput = {
    id?: number
    email: string
    password: string
    reset_password_token?: string | null
    reset_password_expiration?: Date | string | null
    salt?: string | null
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    bio?: string | null
    experience_level?: string | null
    avatar?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubid?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSuccess_storiesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSuccess_storiesInput, usersUncheckedCreateWithoutSuccess_storiesInput>
  }

  export type success_story_toolsCreateWithoutSuccess_storiesInput = {
    tools: toolsCreateNestedOneWithoutSuccess_story_toolsInput
  }

  export type success_story_toolsUncheckedCreateWithoutSuccess_storiesInput = {
    tool_id: number
  }

  export type success_story_toolsCreateOrConnectWithoutSuccess_storiesInput = {
    where: success_story_toolsWhereUniqueInput
    create: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput>
  }

  export type success_story_toolsCreateManySuccess_storiesInputEnvelope = {
    data: success_story_toolsCreateManySuccess_storiesInput | success_story_toolsCreateManySuccess_storiesInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutSuccess_storiesInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutSuccess_storiesInput, commentsUncheckedUpdateWithoutSuccess_storiesInput>
    create: XOR<commentsCreateWithoutSuccess_storiesInput, commentsUncheckedCreateWithoutSuccess_storiesInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutSuccess_storiesInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutSuccess_storiesInput, commentsUncheckedUpdateWithoutSuccess_storiesInput>
  }

  export type commentsUpdateManyWithWhereWithoutSuccess_storiesInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutSuccess_storiesInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    user_id?: IntNullableFilter<"comments"> | number | null
    story_id?: IntNullableFilter<"comments"> | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
  }

  export type usersUpsertWithoutSuccess_storiesInput = {
    update: XOR<usersUpdateWithoutSuccess_storiesInput, usersUncheckedUpdateWithoutSuccess_storiesInput>
    create: XOR<usersCreateWithoutSuccess_storiesInput, usersUncheckedCreateWithoutSuccess_storiesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSuccess_storiesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSuccess_storiesInput, usersUncheckedUpdateWithoutSuccess_storiesInput>
  }

  export type usersUpdateWithoutSuccess_storiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSuccess_storiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience_level?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubid?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type success_story_toolsUpsertWithWhereUniqueWithoutSuccess_storiesInput = {
    where: success_story_toolsWhereUniqueInput
    update: XOR<success_story_toolsUpdateWithoutSuccess_storiesInput, success_story_toolsUncheckedUpdateWithoutSuccess_storiesInput>
    create: XOR<success_story_toolsCreateWithoutSuccess_storiesInput, success_story_toolsUncheckedCreateWithoutSuccess_storiesInput>
  }

  export type success_story_toolsUpdateWithWhereUniqueWithoutSuccess_storiesInput = {
    where: success_story_toolsWhereUniqueInput
    data: XOR<success_story_toolsUpdateWithoutSuccess_storiesInput, success_story_toolsUncheckedUpdateWithoutSuccess_storiesInput>
  }

  export type success_story_toolsUpdateManyWithWhereWithoutSuccess_storiesInput = {
    where: success_story_toolsScalarWhereInput
    data: XOR<success_story_toolsUpdateManyMutationInput, success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesInput>
  }

  export type success_story_toolsScalarWhereInput = {
    AND?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
    OR?: success_story_toolsScalarWhereInput[]
    NOT?: success_story_toolsScalarWhereInput | success_story_toolsScalarWhereInput[]
    story_id?: IntFilter<"success_story_tools"> | number
    tool_id?: IntFilter<"success_story_tools"> | number
  }

  export type success_storiesCreateWithoutSuccess_story_toolsInput = {
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutSuccess_storiesInput
    users?: usersCreateNestedOneWithoutSuccess_storiesInput
  }

  export type success_storiesUncheckedCreateWithoutSuccess_story_toolsInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesCreateOrConnectWithoutSuccess_story_toolsInput = {
    where: success_storiesWhereUniqueInput
    create: XOR<success_storiesCreateWithoutSuccess_story_toolsInput, success_storiesUncheckedCreateWithoutSuccess_story_toolsInput>
  }

  export type toolsCreateWithoutSuccess_story_toolsInput = {
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type toolsUncheckedCreateWithoutSuccess_story_toolsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    url?: string | null
    category?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type toolsCreateOrConnectWithoutSuccess_story_toolsInput = {
    where: toolsWhereUniqueInput
    create: XOR<toolsCreateWithoutSuccess_story_toolsInput, toolsUncheckedCreateWithoutSuccess_story_toolsInput>
  }

  export type success_storiesUpsertWithoutSuccess_story_toolsInput = {
    update: XOR<success_storiesUpdateWithoutSuccess_story_toolsInput, success_storiesUncheckedUpdateWithoutSuccess_story_toolsInput>
    create: XOR<success_storiesCreateWithoutSuccess_story_toolsInput, success_storiesUncheckedCreateWithoutSuccess_story_toolsInput>
    where?: success_storiesWhereInput
  }

  export type success_storiesUpdateToOneWithWhereWithoutSuccess_story_toolsInput = {
    where?: success_storiesWhereInput
    data: XOR<success_storiesUpdateWithoutSuccess_story_toolsInput, success_storiesUncheckedUpdateWithoutSuccess_story_toolsInput>
  }

  export type success_storiesUpdateWithoutSuccess_story_toolsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutSuccess_storiesNestedInput
    users?: usersUpdateOneWithoutSuccess_storiesNestedInput
  }

  export type success_storiesUncheckedUpdateWithoutSuccess_story_toolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type toolsUpsertWithoutSuccess_story_toolsInput = {
    update: XOR<toolsUpdateWithoutSuccess_story_toolsInput, toolsUncheckedUpdateWithoutSuccess_story_toolsInput>
    create: XOR<toolsCreateWithoutSuccess_story_toolsInput, toolsUncheckedCreateWithoutSuccess_story_toolsInput>
    where?: toolsWhereInput
  }

  export type toolsUpdateToOneWithWhereWithoutSuccess_story_toolsInput = {
    where?: toolsWhereInput
    data: XOR<toolsUpdateWithoutSuccess_story_toolsInput, toolsUncheckedUpdateWithoutSuccess_story_toolsInput>
  }

  export type toolsUpdateWithoutSuccess_story_toolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toolsUncheckedUpdateWithoutSuccess_story_toolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type success_story_toolsCreateWithoutToolsInput = {
    success_stories: success_storiesCreateNestedOneWithoutSuccess_story_toolsInput
  }

  export type success_story_toolsUncheckedCreateWithoutToolsInput = {
    story_id: number
  }

  export type success_story_toolsCreateOrConnectWithoutToolsInput = {
    where: success_story_toolsWhereUniqueInput
    create: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput>
  }

  export type success_story_toolsCreateManyToolsInputEnvelope = {
    data: success_story_toolsCreateManyToolsInput | success_story_toolsCreateManyToolsInput[]
    skipDuplicates?: boolean
  }

  export type success_story_toolsUpsertWithWhereUniqueWithoutToolsInput = {
    where: success_story_toolsWhereUniqueInput
    update: XOR<success_story_toolsUpdateWithoutToolsInput, success_story_toolsUncheckedUpdateWithoutToolsInput>
    create: XOR<success_story_toolsCreateWithoutToolsInput, success_story_toolsUncheckedCreateWithoutToolsInput>
  }

  export type success_story_toolsUpdateWithWhereUniqueWithoutToolsInput = {
    where: success_story_toolsWhereUniqueInput
    data: XOR<success_story_toolsUpdateWithoutToolsInput, success_story_toolsUncheckedUpdateWithoutToolsInput>
  }

  export type success_story_toolsUpdateManyWithWhereWithoutToolsInput = {
    where: success_story_toolsScalarWhereInput
    data: XOR<success_story_toolsUpdateManyMutationInput, success_story_toolsUncheckedUpdateManyWithoutToolsInput>
  }

  export type commentsCreateWithoutUsersInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    success_stories?: success_storiesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    content: string
    story_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type success_storiesCreateWithoutUsersInput = {
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutSuccess_storiesInput
    success_story_tools?: success_story_toolsCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutSuccess_storiesInput
    success_story_tools?: success_story_toolsUncheckedCreateNestedManyWithoutSuccess_storiesInput
  }

  export type success_storiesCreateOrConnectWithoutUsersInput = {
    where: success_storiesWhereUniqueInput
    create: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput>
  }

  export type success_storiesCreateManyUsersInputEnvelope = {
    data: success_storiesCreateManyUsersInput | success_storiesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type success_storiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: success_storiesWhereUniqueInput
    update: XOR<success_storiesUpdateWithoutUsersInput, success_storiesUncheckedUpdateWithoutUsersInput>
    create: XOR<success_storiesCreateWithoutUsersInput, success_storiesUncheckedCreateWithoutUsersInput>
  }

  export type success_storiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: success_storiesWhereUniqueInput
    data: XOR<success_storiesUpdateWithoutUsersInput, success_storiesUncheckedUpdateWithoutUsersInput>
  }

  export type success_storiesUpdateManyWithWhereWithoutUsersInput = {
    where: success_storiesScalarWhereInput
    data: XOR<success_storiesUpdateManyMutationInput, success_storiesUncheckedUpdateManyWithoutUsersInput>
  }

  export type success_storiesScalarWhereInput = {
    AND?: success_storiesScalarWhereInput | success_storiesScalarWhereInput[]
    OR?: success_storiesScalarWhereInput[]
    NOT?: success_storiesScalarWhereInput | success_storiesScalarWhereInput[]
    id?: IntFilter<"success_stories"> | number
    title?: StringFilter<"success_stories"> | string
    content?: StringFilter<"success_stories"> | string
    slug?: StringFilter<"success_stories"> | string
    optional_url?: StringNullableFilter<"success_stories"> | string | null
    featured?: BoolNullableFilter<"success_stories"> | boolean | null
    user_id?: IntNullableFilter<"success_stories"> | number | null
    created_at?: DateTimeFilter<"success_stories"> | Date | string
    updated_at?: DateTimeFilter<"success_stories"> | Date | string
  }

  export type related_glossary_termsCreateManyGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    term_id: number
  }

  export type related_glossary_termsCreateManyGlossary_related_glossary_terms_term_idToglossaryInput = {
    related_term_id: number
  }

  export type related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    glossary_related_glossary_terms_term_idToglossary?: glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_term_idToglossaryNestedInput
  }

  export type related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    term_id?: IntFieldUpdateOperationsInput | number
  }

  export type related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_related_term_idToglossaryInput = {
    term_id?: IntFieldUpdateOperationsInput | number
  }

  export type related_glossary_termsUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    glossary_related_glossary_terms_related_term_idToglossary?: glossaryUpdateOneRequiredWithoutRelated_glossary_terms_related_glossary_terms_related_term_idToglossaryNestedInput
  }

  export type related_glossary_termsUncheckedUpdateWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    related_term_id?: IntFieldUpdateOperationsInput | number
  }

  export type related_glossary_termsUncheckedUpdateManyWithoutGlossary_related_glossary_terms_term_idToglossaryInput = {
    related_term_id?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManySuccess_storiesInput = {
    id?: number
    content: string
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type success_story_toolsCreateManySuccess_storiesInput = {
    tool_id: number
  }

  export type commentsUpdateWithoutSuccess_storiesInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutSuccess_storiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyWithoutSuccess_storiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type success_story_toolsUpdateWithoutSuccess_storiesInput = {
    tools?: toolsUpdateOneRequiredWithoutSuccess_story_toolsNestedInput
  }

  export type success_story_toolsUncheckedUpdateWithoutSuccess_storiesInput = {
    tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesInput = {
    tool_id?: IntFieldUpdateOperationsInput | number
  }

  export type success_story_toolsCreateManyToolsInput = {
    story_id: number
  }

  export type success_story_toolsUpdateWithoutToolsInput = {
    success_stories?: success_storiesUpdateOneRequiredWithoutSuccess_story_toolsNestedInput
  }

  export type success_story_toolsUncheckedUpdateWithoutToolsInput = {
    story_id?: IntFieldUpdateOperationsInput | number
  }

  export type success_story_toolsUncheckedUpdateManyWithoutToolsInput = {
    story_id?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    content: string
    story_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type success_storiesCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    slug: string
    optional_url?: string | null
    featured?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    success_stories?: success_storiesUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    story_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    story_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type success_storiesUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutSuccess_storiesNestedInput
    success_story_tools?: success_story_toolsUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type success_storiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
    success_story_tools?: success_story_toolsUncheckedUpdateManyWithoutSuccess_storiesNestedInput
  }

  export type success_storiesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    optional_url?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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