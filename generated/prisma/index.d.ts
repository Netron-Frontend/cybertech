/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model FormBooking
 *
 */
export type FormBooking = $Result.DefaultSelection<Prisma.$FormBookingPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Table
 *
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>;

/**
 * Enums
 */
export namespace $Enums {
	export const FormBookingStatus: {
		PENDING: 'PENDING';
		CONFIRMED: 'CONFIRMED';
		CANCELLED: 'CANCELLED';
		COMPLETED: 'COMPLETED';
	};

	export type FormBookingStatus = (typeof FormBookingStatus)[keyof typeof FormBookingStatus];

	export const UserRole: {
		ADMIN: 'ADMIN';
		MANAGER: 'MANAGER';
	};

	export type UserRole = (typeof UserRole)[keyof typeof UserRole];
}

export type FormBookingStatus = $Enums.FormBookingStatus;

export const FormBookingStatus: typeof $Enums.FormBookingStatus;

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FormBookings
 * const formBookings = await prisma.formBooking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	const U = 'log' extends keyof ClientOptions ? (ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never) : never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more FormBookings
	 * const formBookings = await prisma.formBooking.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
	$transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
		options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel }
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		'extends',
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.formBooking`: Exposes CRUD operations for the **FormBooking** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more FormBookings
	 * const formBookings = await prisma.formBooking.findMany()
	 * ```
	 */
	get formBooking(): Prisma.FormBookingDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.table`: Exposes CRUD operations for the **Table** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Tables
	 * const tables = await prisma.table.findMany()
	 * ```
	 */
	get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.16.1
	 * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

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
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
	export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
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
		O extends unknown ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O) : never
	>;

	type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

	export const ModelName: {
		FormBooking: 'FormBooking';
		User: 'User';
		Table: 'Table';
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
		returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>;
	}

	export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps: 'formBooking' | 'user' | 'table';
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			FormBooking: {
				payload: Prisma.$FormBookingPayload<ExtArgs>;
				fields: Prisma.FormBookingFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.FormBookingFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.FormBookingFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					findFirst: {
						args: Prisma.FormBookingFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.FormBookingFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					findMany: {
						args: Prisma.FormBookingFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>[];
					};
					create: {
						args: Prisma.FormBookingCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					createMany: {
						args: Prisma.FormBookingCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.FormBookingCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>[];
					};
					delete: {
						args: Prisma.FormBookingDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					update: {
						args: Prisma.FormBookingUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					deleteMany: {
						args: Prisma.FormBookingDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.FormBookingUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.FormBookingUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>[];
					};
					upsert: {
						args: Prisma.FormBookingUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$FormBookingPayload>;
					};
					aggregate: {
						args: Prisma.FormBookingAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateFormBooking>;
					};
					groupBy: {
						args: Prisma.FormBookingGroupByArgs<ExtArgs>;
						result: $Utils.Optional<FormBookingGroupByOutputType>[];
					};
					count: {
						args: Prisma.FormBookingCountArgs<ExtArgs>;
						result: $Utils.Optional<FormBookingCountAggregateOutputType> | number;
					};
				};
			};
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Table: {
				payload: Prisma.$TablePayload<ExtArgs>;
				fields: Prisma.TableFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.TableFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					findFirst: {
						args: Prisma.TableFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					findMany: {
						args: Prisma.TableFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>[];
					};
					create: {
						args: Prisma.TableCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					createMany: {
						args: Prisma.TableCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>[];
					};
					delete: {
						args: Prisma.TableDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					update: {
						args: Prisma.TableUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					deleteMany: {
						args: Prisma.TableDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.TableUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>[];
					};
					upsert: {
						args: Prisma.TableUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TablePayload>;
					};
					aggregate: {
						args: Prisma.TableAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateTable>;
					};
					groupBy: {
						args: Prisma.TableGroupByArgs<ExtArgs>;
						result: $Utils.Optional<TableGroupByOutputType>[];
					};
					count: {
						args: Prisma.TableCountArgs<ExtArgs>;
						result: $Utils.Optional<TableCountAggregateOutputType> | number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
		/**
		 * @example
		 * ```
		 * // Shorthand for `emit: 'stdout'`
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events only
		 * log: [
		 *   { emit: 'event', level: 'query' },
		 *   { emit: 'event', level: 'info' },
		 *   { emit: 'event', level: 'warn' }
		 *   { emit: 'event', level: 'error' }
		 * ]
		 *
		 * / Emit as events and log to stdout
		 * og: [
		 *  { emit: 'stdout', level: 'query' },
		 *  { emit: 'stdout', level: 'info' },
		 *  { emit: 'stdout', level: 'warn' }
		 *  { emit: 'stdout', level: 'error' }
		 *
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
		/**
		 * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
		 */
		adapter?: runtime.SqlDriverAdapterFactory | null;
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
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		formBooking?: FormBookingOmit;
		user?: UserOmit;
		table?: TableOmit;
	};

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error';
	export type LogDefinition = {
		level: LogLevel;
		emit: 'stdout' | 'event';
	};

	export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

	export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;

	export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
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
		| 'groupBy';

	// tested in getLogLevel.test.ts
	export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export type UserCountOutputType = {
		bookings: number;
	};

	export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		bookings?: boolean | UserCountOutputTypeCountBookingsArgs;
	};

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		where?: FormBookingWhereInput;
	};

	/**
	 * Count Type TableCountOutputType
	 */

	export type TableCountOutputType = {
		bookings: number;
	};

	export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		bookings?: boolean | TableCountOutputTypeCountBookingsArgs;
	};

	// Custom InputTypes
	/**
	 * TableCountOutputType without action
	 */
	export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the TableCountOutputType
		 */
		select?: TableCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * TableCountOutputType without action
	 */
	export type TableCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		where?: FormBookingWhereInput;
	};

	/**
	 * Models
	 */

	/**
	 * Model FormBooking
	 */

	export type AggregateFormBooking = {
		_count: FormBookingCountAggregateOutputType | null;
		_avg: FormBookingAvgAggregateOutputType | null;
		_sum: FormBookingSumAggregateOutputType | null;
		_min: FormBookingMinAggregateOutputType | null;
		_max: FormBookingMaxAggregateOutputType | null;
	};

	export type FormBookingAvgAggregateOutputType = {
		guestsCount: number | null;
	};

	export type FormBookingSumAggregateOutputType = {
		guestsCount: number | null;
	};

	export type FormBookingMinAggregateOutputType = {
		id: string | null;
		name: string | null;
		date: Date | null;
		time: string | null;
		guestsCount: number | null;
		phoneNumber: string | null;
		notes: string | null;
		status: $Enums.FormBookingStatus | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
		tableId: string | null;
	};

	export type FormBookingMaxAggregateOutputType = {
		id: string | null;
		name: string | null;
		date: Date | null;
		time: string | null;
		guestsCount: number | null;
		phoneNumber: string | null;
		notes: string | null;
		status: $Enums.FormBookingStatus | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
		tableId: string | null;
	};

	export type FormBookingCountAggregateOutputType = {
		id: number;
		name: number;
		date: number;
		time: number;
		guestsCount: number;
		phoneNumber: number;
		notes: number;
		status: number;
		createdAt: number;
		updatedAt: number;
		userId: number;
		tableId: number;
		_all: number;
	};

	export type FormBookingAvgAggregateInputType = {
		guestsCount?: true;
	};

	export type FormBookingSumAggregateInputType = {
		guestsCount?: true;
	};

	export type FormBookingMinAggregateInputType = {
		id?: true;
		name?: true;
		date?: true;
		time?: true;
		guestsCount?: true;
		phoneNumber?: true;
		notes?: true;
		status?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		tableId?: true;
	};

	export type FormBookingMaxAggregateInputType = {
		id?: true;
		name?: true;
		date?: true;
		time?: true;
		guestsCount?: true;
		phoneNumber?: true;
		notes?: true;
		status?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		tableId?: true;
	};

	export type FormBookingCountAggregateInputType = {
		id?: true;
		name?: true;
		date?: true;
		time?: true;
		guestsCount?: true;
		phoneNumber?: true;
		notes?: true;
		status?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		tableId?: true;
		_all?: true;
	};

	export type FormBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which FormBooking to aggregate.
		 */
		where?: FormBookingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of FormBookings to fetch.
		 */
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: FormBookingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` FormBookings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` FormBookings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned FormBookings
		 **/
		_count?: true | FormBookingCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: FormBookingAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: FormBookingSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: FormBookingMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: FormBookingMaxAggregateInputType;
	};

	export type GetFormBookingAggregateType<T extends FormBookingAggregateArgs> = {
		[P in keyof T & keyof AggregateFormBooking]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateFormBooking[P]>
			: GetScalarType<T[P], AggregateFormBooking[P]>;
	};

	export type FormBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		where?: FormBookingWhereInput;
		orderBy?: FormBookingOrderByWithAggregationInput | FormBookingOrderByWithAggregationInput[];
		by: FormBookingScalarFieldEnum[] | FormBookingScalarFieldEnum;
		having?: FormBookingScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: FormBookingCountAggregateInputType | true;
		_avg?: FormBookingAvgAggregateInputType;
		_sum?: FormBookingSumAggregateInputType;
		_min?: FormBookingMinAggregateInputType;
		_max?: FormBookingMaxAggregateInputType;
	};

	export type FormBookingGroupByOutputType = {
		id: string;
		name: string;
		date: Date;
		time: string;
		guestsCount: number;
		phoneNumber: string;
		notes: string | null;
		status: $Enums.FormBookingStatus;
		createdAt: Date;
		updatedAt: Date;
		userId: string | null;
		tableId: string | null;
		_count: FormBookingCountAggregateOutputType | null;
		_avg: FormBookingAvgAggregateOutputType | null;
		_sum: FormBookingSumAggregateOutputType | null;
		_min: FormBookingMinAggregateOutputType | null;
		_max: FormBookingMaxAggregateOutputType | null;
	};

	type GetFormBookingGroupByPayload<T extends FormBookingGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<FormBookingGroupByOutputType, T['by']> & {
				[P in keyof T & keyof FormBookingGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], FormBookingGroupByOutputType[P]>
					: GetScalarType<T[P], FormBookingGroupByOutputType[P]>;
			}
		>
	>;

	export type FormBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			date?: boolean;
			time?: boolean;
			guestsCount?: boolean;
			phoneNumber?: boolean;
			notes?: boolean;
			status?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			tableId?: boolean;
			user?: boolean | FormBooking$userArgs<ExtArgs>;
			table?: boolean | FormBooking$tableArgs<ExtArgs>;
		},
		ExtArgs['result']['formBooking']
	>;

	export type FormBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			date?: boolean;
			time?: boolean;
			guestsCount?: boolean;
			phoneNumber?: boolean;
			notes?: boolean;
			status?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			tableId?: boolean;
			user?: boolean | FormBooking$userArgs<ExtArgs>;
			table?: boolean | FormBooking$tableArgs<ExtArgs>;
		},
		ExtArgs['result']['formBooking']
	>;

	export type FormBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			date?: boolean;
			time?: boolean;
			guestsCount?: boolean;
			phoneNumber?: boolean;
			notes?: boolean;
			status?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			tableId?: boolean;
			user?: boolean | FormBooking$userArgs<ExtArgs>;
			table?: boolean | FormBooking$tableArgs<ExtArgs>;
		},
		ExtArgs['result']['formBooking']
	>;

	export type FormBookingSelectScalar = {
		id?: boolean;
		name?: boolean;
		date?: boolean;
		time?: boolean;
		guestsCount?: boolean;
		phoneNumber?: boolean;
		notes?: boolean;
		status?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
		tableId?: boolean;
	};

	export type FormBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
		'id' | 'name' | 'date' | 'time' | 'guestsCount' | 'phoneNumber' | 'notes' | 'status' | 'createdAt' | 'updatedAt' | 'userId' | 'tableId',
		ExtArgs['result']['formBooking']
	>;
	export type FormBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		user?: boolean | FormBooking$userArgs<ExtArgs>;
		table?: boolean | FormBooking$tableArgs<ExtArgs>;
	};
	export type FormBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		user?: boolean | FormBooking$userArgs<ExtArgs>;
		table?: boolean | FormBooking$tableArgs<ExtArgs>;
	};
	export type FormBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		user?: boolean | FormBooking$userArgs<ExtArgs>;
		table?: boolean | FormBooking$tableArgs<ExtArgs>;
	};

	export type $FormBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		name: 'FormBooking';
		objects: {
			user: Prisma.$UserPayload<ExtArgs> | null;
			table: Prisma.$TablePayload<ExtArgs> | null;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				name: string;
				date: Date;
				time: string;
				guestsCount: number;
				phoneNumber: string;
				notes: string | null;
				status: $Enums.FormBookingStatus;
				createdAt: Date;
				updatedAt: Date;
				userId: string | null;
				tableId: string | null;
			},
			ExtArgs['result']['formBooking']
		>;
		composites: {};
	};

	type FormBookingGetPayload<S extends boolean | null | undefined | FormBookingDefaultArgs> = $Result.GetResult<Prisma.$FormBookingPayload, S>;

	type FormBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<FormBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: FormBookingCountAggregateInputType | true;
	};

	export interface FormBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormBooking']; meta: { name: 'FormBooking' } };
		/**
		 * Find zero or one FormBooking that matches the filter.
		 * @param {FormBookingFindUniqueArgs} args - Arguments to find a FormBooking
		 * @example
		 * // Get one FormBooking
		 * const formBooking = await prisma.formBooking.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends FormBookingFindUniqueArgs>(
			args: SelectSubset<T, FormBookingFindUniqueArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find one FormBooking that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {FormBookingFindUniqueOrThrowArgs} args - Arguments to find a FormBooking
		 * @example
		 * // Get one FormBooking
		 * const formBooking = await prisma.formBooking.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends FormBookingFindUniqueOrThrowArgs>(
			args: SelectSubset<T, FormBookingFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first FormBooking that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingFindFirstArgs} args - Arguments to find a FormBooking
		 * @example
		 * // Get one FormBooking
		 * const formBooking = await prisma.formBooking.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends FormBookingFindFirstArgs>(
			args?: SelectSubset<T, FormBookingFindFirstArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first FormBooking that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingFindFirstOrThrowArgs} args - Arguments to find a FormBooking
		 * @example
		 * // Get one FormBooking
		 * const formBooking = await prisma.formBooking.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends FormBookingFindFirstOrThrowArgs>(
			args?: SelectSubset<T, FormBookingFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find zero or more FormBookings that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all FormBookings
		 * const formBookings = await prisma.formBooking.findMany()
		 *
		 * // Get first 10 FormBookings
		 * const formBookings = await prisma.formBooking.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const formBookingWithIdOnly = await prisma.formBooking.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends FormBookingFindManyArgs>(
			args?: SelectSubset<T, FormBookingFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

		/**
		 * Create a FormBooking.
		 * @param {FormBookingCreateArgs} args - Arguments to create a FormBooking.
		 * @example
		 * // Create one FormBooking
		 * const FormBooking = await prisma.formBooking.create({
		 *   data: {
		 *     // ... data to create a FormBooking
		 *   }
		 * })
		 *
		 */
		create<T extends FormBookingCreateArgs>(
			args: SelectSubset<T, FormBookingCreateArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Create many FormBookings.
		 * @param {FormBookingCreateManyArgs} args - Arguments to create many FormBookings.
		 * @example
		 * // Create many FormBookings
		 * const formBooking = await prisma.formBooking.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends FormBookingCreateManyArgs>(args?: SelectSubset<T, FormBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many FormBookings and returns the data saved in the database.
		 * @param {FormBookingCreateManyAndReturnArgs} args - Arguments to create many FormBookings.
		 * @example
		 * // Create many FormBookings
		 * const formBooking = await prisma.formBooking.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many FormBookings and only return the `id`
		 * const formBookingWithIdOnly = await prisma.formBooking.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends FormBookingCreateManyAndReturnArgs>(
			args?: SelectSubset<T, FormBookingCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>;

		/**
		 * Delete a FormBooking.
		 * @param {FormBookingDeleteArgs} args - Arguments to delete one FormBooking.
		 * @example
		 * // Delete one FormBooking
		 * const FormBooking = await prisma.formBooking.delete({
		 *   where: {
		 *     // ... filter to delete one FormBooking
		 *   }
		 * })
		 *
		 */
		delete<T extends FormBookingDeleteArgs>(
			args: SelectSubset<T, FormBookingDeleteArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Update one FormBooking.
		 * @param {FormBookingUpdateArgs} args - Arguments to update one FormBooking.
		 * @example
		 * // Update one FormBooking
		 * const formBooking = await prisma.formBooking.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends FormBookingUpdateArgs>(
			args: SelectSubset<T, FormBookingUpdateArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Delete zero or more FormBookings.
		 * @param {FormBookingDeleteManyArgs} args - Arguments to filter FormBookings to delete.
		 * @example
		 * // Delete a few FormBookings
		 * const { count } = await prisma.formBooking.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends FormBookingDeleteManyArgs>(args?: SelectSubset<T, FormBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more FormBookings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many FormBookings
		 * const formBooking = await prisma.formBooking.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends FormBookingUpdateManyArgs>(args: SelectSubset<T, FormBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more FormBookings and returns the data updated in the database.
		 * @param {FormBookingUpdateManyAndReturnArgs} args - Arguments to update many FormBookings.
		 * @example
		 * // Update many FormBookings
		 * const formBooking = await prisma.formBooking.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more FormBookings and only return the `id`
		 * const formBookingWithIdOnly = await prisma.formBooking.updateManyAndReturn({
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
		updateManyAndReturn<T extends FormBookingUpdateManyAndReturnArgs>(
			args: SelectSubset<T, FormBookingUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>;

		/**
		 * Create or update one FormBooking.
		 * @param {FormBookingUpsertArgs} args - Arguments to update or create a FormBooking.
		 * @example
		 * // Update or create a FormBooking
		 * const formBooking = await prisma.formBooking.upsert({
		 *   create: {
		 *     // ... data to create a FormBooking
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the FormBooking we want to update
		 *   }
		 * })
		 */
		upsert<T extends FormBookingUpsertArgs>(
			args: SelectSubset<T, FormBookingUpsertArgs<ExtArgs>>
		): Prisma__FormBookingClient<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Count the number of FormBookings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingCountArgs} args - Arguments to filter FormBookings to count.
		 * @example
		 * // Count the number of FormBookings
		 * const count = await prisma.formBooking.count({
		 *   where: {
		 *     // ... the filter for the FormBookings we want to count
		 *   }
		 * })
		 **/
		count<T extends FormBookingCountArgs>(
			args?: Subset<T, FormBookingCountArgs>
		): Prisma.PrismaPromise<T extends $Utils.Record<'select', any> ? (T['select'] extends true ? number : GetScalarType<T['select'], FormBookingCountAggregateOutputType>) : number>;

		/**
		 * Allows you to perform aggregations operations on a FormBooking.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends FormBookingAggregateArgs>(args: Subset<T, FormBookingAggregateArgs>): Prisma.PrismaPromise<GetFormBookingAggregateType<T>>;

		/**
		 * Group by FormBooking.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FormBookingGroupByArgs} args - Group by arguments.
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
			T extends FormBookingGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake ? { orderBy: FormBookingGroupByArgs['orderBy'] } : { orderBy?: FormBookingGroupByArgs['orderBy'] },
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
		>(
			args: SubsetIntersection<T, FormBookingGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetFormBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the FormBooking model
		 */
		readonly fields: FormBookingFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for FormBooking.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__FormBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		user<T extends FormBooking$userArgs<ExtArgs> = {}>(
			args?: Subset<T, FormBooking$userArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
		table<T extends FormBooking$tableArgs<ExtArgs> = {}>(
			args?: Subset<T, FormBooking$tableArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the FormBooking model
	 */
	interface FormBookingFieldRefs {
		readonly id: FieldRef<'FormBooking', 'String'>;
		readonly name: FieldRef<'FormBooking', 'String'>;
		readonly date: FieldRef<'FormBooking', 'DateTime'>;
		readonly time: FieldRef<'FormBooking', 'String'>;
		readonly guestsCount: FieldRef<'FormBooking', 'Int'>;
		readonly phoneNumber: FieldRef<'FormBooking', 'String'>;
		readonly notes: FieldRef<'FormBooking', 'String'>;
		readonly status: FieldRef<'FormBooking', 'FormBookingStatus'>;
		readonly createdAt: FieldRef<'FormBooking', 'DateTime'>;
		readonly updatedAt: FieldRef<'FormBooking', 'DateTime'>;
		readonly userId: FieldRef<'FormBooking', 'String'>;
		readonly tableId: FieldRef<'FormBooking', 'String'>;
	}

	// Custom InputTypes
	/**
	 * FormBooking findUnique
	 */
	export type FormBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter, which FormBooking to fetch.
		 */
		where: FormBookingWhereUniqueInput;
	};

	/**
	 * FormBooking findUniqueOrThrow
	 */
	export type FormBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter, which FormBooking to fetch.
		 */
		where: FormBookingWhereUniqueInput;
	};

	/**
	 * FormBooking findFirst
	 */
	export type FormBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter, which FormBooking to fetch.
		 */
		where?: FormBookingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of FormBookings to fetch.
		 */
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for FormBookings.
		 */
		cursor?: FormBookingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` FormBookings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` FormBookings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of FormBookings.
		 */
		distinct?: FormBookingScalarFieldEnum | FormBookingScalarFieldEnum[];
	};

	/**
	 * FormBooking findFirstOrThrow
	 */
	export type FormBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter, which FormBooking to fetch.
		 */
		where?: FormBookingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of FormBookings to fetch.
		 */
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for FormBookings.
		 */
		cursor?: FormBookingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` FormBookings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` FormBookings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of FormBookings.
		 */
		distinct?: FormBookingScalarFieldEnum | FormBookingScalarFieldEnum[];
	};

	/**
	 * FormBooking findMany
	 */
	export type FormBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter, which FormBookings to fetch.
		 */
		where?: FormBookingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of FormBookings to fetch.
		 */
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing FormBookings.
		 */
		cursor?: FormBookingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` FormBookings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` FormBookings.
		 */
		skip?: number;
		distinct?: FormBookingScalarFieldEnum | FormBookingScalarFieldEnum[];
	};

	/**
	 * FormBooking create
	 */
	export type FormBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * The data needed to create a FormBooking.
		 */
		data: XOR<FormBookingCreateInput, FormBookingUncheckedCreateInput>;
	};

	/**
	 * FormBooking createMany
	 */
	export type FormBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to create many FormBookings.
		 */
		data: FormBookingCreateManyInput | FormBookingCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * FormBooking createManyAndReturn
	 */
	export type FormBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * The data used to create many FormBookings.
		 */
		data: FormBookingCreateManyInput | FormBookingCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * FormBooking update
	 */
	export type FormBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * The data needed to update a FormBooking.
		 */
		data: XOR<FormBookingUpdateInput, FormBookingUncheckedUpdateInput>;
		/**
		 * Choose, which FormBooking to update.
		 */
		where: FormBookingWhereUniqueInput;
	};

	/**
	 * FormBooking updateMany
	 */
	export type FormBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to update FormBookings.
		 */
		data: XOR<FormBookingUpdateManyMutationInput, FormBookingUncheckedUpdateManyInput>;
		/**
		 * Filter which FormBookings to update
		 */
		where?: FormBookingWhereInput;
		/**
		 * Limit how many FormBookings to update.
		 */
		limit?: number;
	};

	/**
	 * FormBooking updateManyAndReturn
	 */
	export type FormBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * The data used to update FormBookings.
		 */
		data: XOR<FormBookingUpdateManyMutationInput, FormBookingUncheckedUpdateManyInput>;
		/**
		 * Filter which FormBookings to update
		 */
		where?: FormBookingWhereInput;
		/**
		 * Limit how many FormBookings to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * FormBooking upsert
	 */
	export type FormBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * The filter to search for the FormBooking to update in case it exists.
		 */
		where: FormBookingWhereUniqueInput;
		/**
		 * In case the FormBooking found by the `where` argument doesn't exist, create a new FormBooking with this data.
		 */
		create: XOR<FormBookingCreateInput, FormBookingUncheckedCreateInput>;
		/**
		 * In case the FormBooking was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<FormBookingUpdateInput, FormBookingUncheckedUpdateInput>;
	};

	/**
	 * FormBooking delete
	 */
	export type FormBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		/**
		 * Filter which FormBooking to delete.
		 */
		where: FormBookingWhereUniqueInput;
	};

	/**
	 * FormBooking deleteMany
	 */
	export type FormBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which FormBookings to delete
		 */
		where?: FormBookingWhereInput;
		/**
		 * Limit how many FormBookings to delete.
		 */
		limit?: number;
	};

	/**
	 * FormBooking.user
	 */
	export type FormBooking$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		where?: UserWhereInput;
	};

	/**
	 * FormBooking.table
	 */
	export type FormBooking$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		where?: TableWhereInput;
	};

	/**
	 * FormBooking without action
	 */
	export type FormBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
	};

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserMinAggregateOutputType = {
		id: string | null;
		email: string | null;
		password: string | null;
		name: string | null;
		role: $Enums.UserRole | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: string | null;
		email: string | null;
		password: string | null;
		name: string | null;
		role: $Enums.UserRole | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		email: number;
		password: number;
		name: number;
		role: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		name?: true;
		role?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		name?: true;
		role?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		name?: true;
		role?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? (T[P] extends true ? number : GetScalarType<T[P], AggregateUser[P]>) : GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		where?: UserWhereInput;
		orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: string;
		email: string;
		password: string;
		name: string;
		role: $Enums.UserRole;
		createdAt: Date;
		updatedAt: Date;
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			password?: boolean;
			name?: boolean;
			role?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			bookings?: boolean | User$bookingsArgs<ExtArgs>;
			_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			password?: boolean;
			name?: boolean;
			role?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			password?: boolean;
			name?: boolean;
			role?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectScalar = {
		id?: boolean;
		email?: boolean;
		password?: boolean;
		name?: boolean;
		role?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
		'id' | 'email' | 'password' | 'name' | 'role' | 'createdAt' | 'updatedAt',
		ExtArgs['result']['user']
	>;
	export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		bookings?: boolean | User$bookingsArgs<ExtArgs>;
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
	export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};

	export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		name: 'User';
		objects: {
			bookings: Prisma.$FormBookingPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				email: string;
				password: string;
				name: string;
				role: $Enums.UserRole;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['user']
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
		 */
		findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

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
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>;

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
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

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
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

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
		 */
		deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
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
		 */
		updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>;

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
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
		): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>
		): Prisma.PrismaPromise<T extends $Utils.Record<'select', any> ? (T['select'] extends true ? number : GetScalarType<T['select'], UserCountAggregateOutputType>) : number>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
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
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake ? { orderBy: UserGroupByArgs['orderBy'] } : { orderBy?: UserGroupByArgs['orderBy'] },
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		bookings<T extends User$bookingsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$bookingsArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<'User', 'String'>;
		readonly email: FieldRef<'User', 'String'>;
		readonly password: FieldRef<'User', 'String'>;
		readonly name: FieldRef<'User', 'String'>;
		readonly role: FieldRef<'User', 'UserRole'>;
		readonly createdAt: FieldRef<'User', 'DateTime'>;
		readonly updatedAt: FieldRef<'User', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User.bookings
	 */
	export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		where?: FormBookingWhereInput;
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		cursor?: FormBookingWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: FormBookingScalarFieldEnum | FormBookingScalarFieldEnum[];
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
	};

	/**
	 * Model Table
	 */

	export type AggregateTable = {
		_count: TableCountAggregateOutputType | null;
		_avg: TableAvgAggregateOutputType | null;
		_sum: TableSumAggregateOutputType | null;
		_min: TableMinAggregateOutputType | null;
		_max: TableMaxAggregateOutputType | null;
	};

	export type TableAvgAggregateOutputType = {
		tableNumber: number | null;
		capacity: number | null;
	};

	export type TableSumAggregateOutputType = {
		tableNumber: number | null;
		capacity: number | null;
	};

	export type TableMinAggregateOutputType = {
		id: string | null;
		tableNumber: number | null;
		capacity: number | null;
		location: string | null;
		isAvailable: boolean | null;
	};

	export type TableMaxAggregateOutputType = {
		id: string | null;
		tableNumber: number | null;
		capacity: number | null;
		location: string | null;
		isAvailable: boolean | null;
	};

	export type TableCountAggregateOutputType = {
		id: number;
		tableNumber: number;
		capacity: number;
		location: number;
		isAvailable: number;
		_all: number;
	};

	export type TableAvgAggregateInputType = {
		tableNumber?: true;
		capacity?: true;
	};

	export type TableSumAggregateInputType = {
		tableNumber?: true;
		capacity?: true;
	};

	export type TableMinAggregateInputType = {
		id?: true;
		tableNumber?: true;
		capacity?: true;
		location?: true;
		isAvailable?: true;
	};

	export type TableMaxAggregateInputType = {
		id?: true;
		tableNumber?: true;
		capacity?: true;
		location?: true;
		isAvailable?: true;
	};

	export type TableCountAggregateInputType = {
		id?: true;
		tableNumber?: true;
		capacity?: true;
		location?: true;
		isAvailable?: true;
		_all?: true;
	};

	export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which Table to aggregate.
		 */
		where?: TableWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Tables to fetch.
		 */
		orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: TableWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Tables from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Tables.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Tables
		 **/
		_count?: true | TableCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: TableAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: TableSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: TableMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: TableMaxAggregateInputType;
	};

	export type GetTableAggregateType<T extends TableAggregateArgs> = {
		[P in keyof T & keyof AggregateTable]: P extends '_count' | 'count' ? (T[P] extends true ? number : GetScalarType<T[P], AggregateTable[P]>) : GetScalarType<T[P], AggregateTable[P]>;
	};

	export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		where?: TableWhereInput;
		orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[];
		by: TableScalarFieldEnum[] | TableScalarFieldEnum;
		having?: TableScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: TableCountAggregateInputType | true;
		_avg?: TableAvgAggregateInputType;
		_sum?: TableSumAggregateInputType;
		_min?: TableMinAggregateInputType;
		_max?: TableMaxAggregateInputType;
	};

	export type TableGroupByOutputType = {
		id: string;
		tableNumber: number;
		capacity: number;
		location: string | null;
		isAvailable: boolean;
		_count: TableCountAggregateOutputType | null;
		_avg: TableAvgAggregateOutputType | null;
		_sum: TableSumAggregateOutputType | null;
		_min: TableMinAggregateOutputType | null;
		_max: TableMaxAggregateOutputType | null;
	};

	type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<TableGroupByOutputType, T['by']> & {
				[P in keyof T & keyof TableGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], TableGroupByOutputType[P]>
					: GetScalarType<T[P], TableGroupByOutputType[P]>;
			}
		>
	>;

	export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			tableNumber?: boolean;
			capacity?: boolean;
			location?: boolean;
			isAvailable?: boolean;
			bookings?: boolean | Table$bookingsArgs<ExtArgs>;
			_count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['table']
	>;

	export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			tableNumber?: boolean;
			capacity?: boolean;
			location?: boolean;
			isAvailable?: boolean;
		},
		ExtArgs['result']['table']
	>;

	export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
		{
			id?: boolean;
			tableNumber?: boolean;
			capacity?: boolean;
			location?: boolean;
			isAvailable?: boolean;
		},
		ExtArgs['result']['table']
	>;

	export type TableSelectScalar = {
		id?: boolean;
		tableNumber?: boolean;
		capacity?: boolean;
		location?: boolean;
		isAvailable?: boolean;
	};

	export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
		'id' | 'tableNumber' | 'capacity' | 'location' | 'isAvailable',
		ExtArgs['result']['table']
	>;
	export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		bookings?: boolean | Table$bookingsArgs<ExtArgs>;
		_count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
	export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};

	export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		name: 'Table';
		objects: {
			bookings: Prisma.$FormBookingPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				tableNumber: number;
				capacity: number;
				location: string | null;
				isAvailable: boolean;
			},
			ExtArgs['result']['table']
		>;
		composites: {};
	};

	type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>;

	type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: TableCountAggregateInputType | true;
	};

	export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table']; meta: { name: 'Table' } };
		/**
		 * Find zero or one Table that matches the filter.
		 * @param {TableFindUniqueArgs} args - Arguments to find a Table
		 * @example
		 * // Get one Table
		 * const table = await prisma.table.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends TableFindUniqueArgs>(
			args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find one Table that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
		 * @example
		 * // Get one Table
		 * const table = await prisma.table.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(
			args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first Table that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableFindFirstArgs} args - Arguments to find a Table
		 * @example
		 * // Get one Table
		 * const table = await prisma.table.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends TableFindFirstArgs>(
			args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find the first Table that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
		 * @example
		 * // Get one Table
		 * const table = await prisma.table.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(
			args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Find zero or more Tables that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Tables
		 * const tables = await prisma.table.findMany()
		 *
		 * // Get first 10 Tables
		 * const tables = await prisma.table.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>;

		/**
		 * Create a Table.
		 * @param {TableCreateArgs} args - Arguments to create a Table.
		 * @example
		 * // Create one Table
		 * const Table = await prisma.table.create({
		 *   data: {
		 *     // ... data to create a Table
		 *   }
		 * })
		 *
		 */
		create<T extends TableCreateArgs>(
			args: SelectSubset<T, TableCreateArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Create many Tables.
		 * @param {TableCreateManyArgs} args - Arguments to create many Tables.
		 * @example
		 * // Create many Tables
		 * const table = await prisma.table.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Tables and returns the data saved in the database.
		 * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
		 * @example
		 * // Create many Tables
		 * const table = await prisma.table.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Tables and only return the `id`
		 * const tableWithIdOnly = await prisma.table.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends TableCreateManyAndReturnArgs>(
			args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>;

		/**
		 * Delete a Table.
		 * @param {TableDeleteArgs} args - Arguments to delete one Table.
		 * @example
		 * // Delete one Table
		 * const Table = await prisma.table.delete({
		 *   where: {
		 *     // ... filter to delete one Table
		 *   }
		 * })
		 *
		 */
		delete<T extends TableDeleteArgs>(
			args: SelectSubset<T, TableDeleteArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Update one Table.
		 * @param {TableUpdateArgs} args - Arguments to update one Table.
		 * @example
		 * // Update one Table
		 * const table = await prisma.table.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends TableUpdateArgs>(
			args: SelectSubset<T, TableUpdateArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Delete zero or more Tables.
		 * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
		 * @example
		 * // Delete a few Tables
		 * const { count } = await prisma.table.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Tables.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Tables
		 * const table = await prisma.table.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Tables and returns the data updated in the database.
		 * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
		 * @example
		 * // Update many Tables
		 * const table = await prisma.table.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Tables and only return the `id`
		 * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
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
		updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(
			args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>;

		/**
		 * Create or update one Table.
		 * @param {TableUpsertArgs} args - Arguments to update or create a Table.
		 * @example
		 * // Update or create a Table
		 * const table = await prisma.table.upsert({
		 *   create: {
		 *     // ... data to create a Table
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Table we want to update
		 *   }
		 * })
		 */
		upsert<T extends TableUpsertArgs>(
			args: SelectSubset<T, TableUpsertArgs<ExtArgs>>
		): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;

		/**
		 * Count the number of Tables.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableCountArgs} args - Arguments to filter Tables to count.
		 * @example
		 * // Count the number of Tables
		 * const count = await prisma.table.count({
		 *   where: {
		 *     // ... the filter for the Tables we want to count
		 *   }
		 * })
		 **/
		count<T extends TableCountArgs>(
			args?: Subset<T, TableCountArgs>
		): Prisma.PrismaPromise<T extends $Utils.Record<'select', any> ? (T['select'] extends true ? number : GetScalarType<T['select'], TableCountAggregateOutputType>) : number>;

		/**
		 * Allows you to perform aggregations operations on a Table.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>;

		/**
		 * Group by Table.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TableGroupByArgs} args - Group by arguments.
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
			T extends TableGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake ? { orderBy: TableGroupByArgs['orderBy'] } : { orderBy?: TableGroupByArgs['orderBy'] },
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
		>(
			args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Table model
		 */
		readonly fields: TableFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Table.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		bookings<T extends Table$bookingsArgs<ExtArgs> = {}>(
			args?: Subset<T, Table$bookingsArgs<ExtArgs>>
		): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBookingPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Table model
	 */
	interface TableFieldRefs {
		readonly id: FieldRef<'Table', 'String'>;
		readonly tableNumber: FieldRef<'Table', 'Int'>;
		readonly capacity: FieldRef<'Table', 'Int'>;
		readonly location: FieldRef<'Table', 'String'>;
		readonly isAvailable: FieldRef<'Table', 'Boolean'>;
	}

	// Custom InputTypes
	/**
	 * Table findUnique
	 */
	export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter, which Table to fetch.
		 */
		where: TableWhereUniqueInput;
	};

	/**
	 * Table findUniqueOrThrow
	 */
	export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter, which Table to fetch.
		 */
		where: TableWhereUniqueInput;
	};

	/**
	 * Table findFirst
	 */
	export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter, which Table to fetch.
		 */
		where?: TableWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Tables to fetch.
		 */
		orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Tables.
		 */
		cursor?: TableWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Tables from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Tables.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Tables.
		 */
		distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
	};

	/**
	 * Table findFirstOrThrow
	 */
	export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter, which Table to fetch.
		 */
		where?: TableWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Tables to fetch.
		 */
		orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Tables.
		 */
		cursor?: TableWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Tables from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Tables.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Tables.
		 */
		distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
	};

	/**
	 * Table findMany
	 */
	export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter, which Tables to fetch.
		 */
		where?: TableWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Tables to fetch.
		 */
		orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Tables.
		 */
		cursor?: TableWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Tables from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Tables.
		 */
		skip?: number;
		distinct?: TableScalarFieldEnum | TableScalarFieldEnum[];
	};

	/**
	 * Table create
	 */
	export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Table.
		 */
		data: XOR<TableCreateInput, TableUncheckedCreateInput>;
	};

	/**
	 * Table createMany
	 */
	export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to create many Tables.
		 */
		data: TableCreateManyInput | TableCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Table createManyAndReturn
	 */
	export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * The data used to create many Tables.
		 */
		data: TableCreateManyInput | TableCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Table update
	 */
	export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Table.
		 */
		data: XOR<TableUpdateInput, TableUncheckedUpdateInput>;
		/**
		 * Choose, which Table to update.
		 */
		where: TableWhereUniqueInput;
	};

	/**
	 * Table updateMany
	 */
	export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * The data used to update Tables.
		 */
		data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>;
		/**
		 * Filter which Tables to update
		 */
		where?: TableWhereInput;
		/**
		 * Limit how many Tables to update.
		 */
		limit?: number;
	};

	/**
	 * Table updateManyAndReturn
	 */
	export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * The data used to update Tables.
		 */
		data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>;
		/**
		 * Filter which Tables to update
		 */
		where?: TableWhereInput;
		/**
		 * Limit how many Tables to update.
		 */
		limit?: number;
	};

	/**
	 * Table upsert
	 */
	export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Table to update in case it exists.
		 */
		where: TableWhereUniqueInput;
		/**
		 * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
		 */
		create: XOR<TableCreateInput, TableUncheckedCreateInput>;
		/**
		 * In case the Table was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<TableUpdateInput, TableUncheckedUpdateInput>;
	};

	/**
	 * Table delete
	 */
	export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
		/**
		 * Filter which Table to delete.
		 */
		where: TableWhereUniqueInput;
	};

	/**
	 * Table deleteMany
	 */
	export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Filter which Tables to delete
		 */
		where?: TableWhereInput;
		/**
		 * Limit how many Tables to delete.
		 */
		limit?: number;
	};

	/**
	 * Table.bookings
	 */
	export type Table$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the FormBooking
		 */
		select?: FormBookingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the FormBooking
		 */
		omit?: FormBookingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: FormBookingInclude<ExtArgs> | null;
		where?: FormBookingWhereInput;
		orderBy?: FormBookingOrderByWithRelationInput | FormBookingOrderByWithRelationInput[];
		cursor?: FormBookingWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: FormBookingScalarFieldEnum | FormBookingScalarFieldEnum[];
	};

	/**
	 * Table without action
	 */
	export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Table
		 */
		select?: TableSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Table
		 */
		omit?: TableOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TableInclude<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: 'ReadUncommitted';
		ReadCommitted: 'ReadCommitted';
		RepeatableRead: 'RepeatableRead';
		Serializable: 'Serializable';
	};

	export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const FormBookingScalarFieldEnum: {
		id: 'id';
		name: 'name';
		date: 'date';
		time: 'time';
		guestsCount: 'guestsCount';
		phoneNumber: 'phoneNumber';
		notes: 'notes';
		status: 'status';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		userId: 'userId';
		tableId: 'tableId';
	};

	export type FormBookingScalarFieldEnum = (typeof FormBookingScalarFieldEnum)[keyof typeof FormBookingScalarFieldEnum];

	export const UserScalarFieldEnum: {
		id: 'id';
		email: 'email';
		password: 'password';
		name: 'name';
		role: 'role';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const TableScalarFieldEnum: {
		id: 'id';
		tableNumber: 'tableNumber';
		capacity: 'capacity';
		location: 'location';
		isAvailable: 'isAvailable';
	};

	export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum];

	export const SortOrder: {
		asc: 'asc';
		desc: 'desc';
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: 'default';
		insensitive: 'insensitive';
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: 'first';
		last: 'last';
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

	/**
	 * Reference to a field of type 'FormBookingStatus'
	 */
	export type EnumFormBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormBookingStatus'>;

	/**
	 * Reference to a field of type 'FormBookingStatus[]'
	 */
	export type ListEnumFormBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormBookingStatus[]'>;

	/**
	 * Reference to a field of type 'UserRole'
	 */
	export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;

	/**
	 * Reference to a field of type 'UserRole[]'
	 */
	export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

	/**
	 * Deep Input Types
	 */

	export type FormBookingWhereInput = {
		AND?: FormBookingWhereInput | FormBookingWhereInput[];
		OR?: FormBookingWhereInput[];
		NOT?: FormBookingWhereInput | FormBookingWhereInput[];
		id?: StringFilter<'FormBooking'> | string;
		name?: StringFilter<'FormBooking'> | string;
		date?: DateTimeFilter<'FormBooking'> | Date | string;
		time?: StringFilter<'FormBooking'> | string;
		guestsCount?: IntFilter<'FormBooking'> | number;
		phoneNumber?: StringFilter<'FormBooking'> | string;
		notes?: StringNullableFilter<'FormBooking'> | string | null;
		status?: EnumFormBookingStatusFilter<'FormBooking'> | $Enums.FormBookingStatus;
		createdAt?: DateTimeFilter<'FormBooking'> | Date | string;
		updatedAt?: DateTimeFilter<'FormBooking'> | Date | string;
		userId?: StringNullableFilter<'FormBooking'> | string | null;
		tableId?: StringNullableFilter<'FormBooking'> | string | null;
		user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
		table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null;
	};

	export type FormBookingOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		date?: SortOrder;
		time?: SortOrder;
		guestsCount?: SortOrder;
		phoneNumber?: SortOrder;
		notes?: SortOrderInput | SortOrder;
		status?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrderInput | SortOrder;
		tableId?: SortOrderInput | SortOrder;
		user?: UserOrderByWithRelationInput;
		table?: TableOrderByWithRelationInput;
	};

	export type FormBookingWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: FormBookingWhereInput | FormBookingWhereInput[];
			OR?: FormBookingWhereInput[];
			NOT?: FormBookingWhereInput | FormBookingWhereInput[];
			name?: StringFilter<'FormBooking'> | string;
			date?: DateTimeFilter<'FormBooking'> | Date | string;
			time?: StringFilter<'FormBooking'> | string;
			guestsCount?: IntFilter<'FormBooking'> | number;
			phoneNumber?: StringFilter<'FormBooking'> | string;
			notes?: StringNullableFilter<'FormBooking'> | string | null;
			status?: EnumFormBookingStatusFilter<'FormBooking'> | $Enums.FormBookingStatus;
			createdAt?: DateTimeFilter<'FormBooking'> | Date | string;
			updatedAt?: DateTimeFilter<'FormBooking'> | Date | string;
			userId?: StringNullableFilter<'FormBooking'> | string | null;
			tableId?: StringNullableFilter<'FormBooking'> | string | null;
			user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
			table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null;
		},
		'id'
	>;

	export type FormBookingOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		date?: SortOrder;
		time?: SortOrder;
		guestsCount?: SortOrder;
		phoneNumber?: SortOrder;
		notes?: SortOrderInput | SortOrder;
		status?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrderInput | SortOrder;
		tableId?: SortOrderInput | SortOrder;
		_count?: FormBookingCountOrderByAggregateInput;
		_avg?: FormBookingAvgOrderByAggregateInput;
		_max?: FormBookingMaxOrderByAggregateInput;
		_min?: FormBookingMinOrderByAggregateInput;
		_sum?: FormBookingSumOrderByAggregateInput;
	};

	export type FormBookingScalarWhereWithAggregatesInput = {
		AND?: FormBookingScalarWhereWithAggregatesInput | FormBookingScalarWhereWithAggregatesInput[];
		OR?: FormBookingScalarWhereWithAggregatesInput[];
		NOT?: FormBookingScalarWhereWithAggregatesInput | FormBookingScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'FormBooking'> | string;
		name?: StringWithAggregatesFilter<'FormBooking'> | string;
		date?: DateTimeWithAggregatesFilter<'FormBooking'> | Date | string;
		time?: StringWithAggregatesFilter<'FormBooking'> | string;
		guestsCount?: IntWithAggregatesFilter<'FormBooking'> | number;
		phoneNumber?: StringWithAggregatesFilter<'FormBooking'> | string;
		notes?: StringNullableWithAggregatesFilter<'FormBooking'> | string | null;
		status?: EnumFormBookingStatusWithAggregatesFilter<'FormBooking'> | $Enums.FormBookingStatus;
		createdAt?: DateTimeWithAggregatesFilter<'FormBooking'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'FormBooking'> | Date | string;
		userId?: StringNullableWithAggregatesFilter<'FormBooking'> | string | null;
		tableId?: StringNullableWithAggregatesFilter<'FormBooking'> | string | null;
	};

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: StringFilter<'User'> | string;
		email?: StringFilter<'User'> | string;
		password?: StringFilter<'User'> | string;
		name?: StringFilter<'User'> | string;
		role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
		createdAt?: DateTimeFilter<'User'> | Date | string;
		updatedAt?: DateTimeFilter<'User'> | Date | string;
		bookings?: FormBookingListRelationFilter;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		name?: SortOrder;
		role?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		bookings?: FormBookingOrderByRelationAggregateInput;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			password?: StringFilter<'User'> | string;
			name?: StringFilter<'User'> | string;
			role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
			createdAt?: DateTimeFilter<'User'> | Date | string;
			updatedAt?: DateTimeFilter<'User'> | Date | string;
			bookings?: FormBookingListRelationFilter;
		},
		'id' | 'email'
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		name?: SortOrder;
		role?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'User'> | string;
		email?: StringWithAggregatesFilter<'User'> | string;
		password?: StringWithAggregatesFilter<'User'> | string;
		name?: StringWithAggregatesFilter<'User'> | string;
		role?: EnumUserRoleWithAggregatesFilter<'User'> | $Enums.UserRole;
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
	};

	export type TableWhereInput = {
		AND?: TableWhereInput | TableWhereInput[];
		OR?: TableWhereInput[];
		NOT?: TableWhereInput | TableWhereInput[];
		id?: StringFilter<'Table'> | string;
		tableNumber?: IntFilter<'Table'> | number;
		capacity?: IntFilter<'Table'> | number;
		location?: StringNullableFilter<'Table'> | string | null;
		isAvailable?: BoolFilter<'Table'> | boolean;
		bookings?: FormBookingListRelationFilter;
	};

	export type TableOrderByWithRelationInput = {
		id?: SortOrder;
		tableNumber?: SortOrder;
		capacity?: SortOrder;
		location?: SortOrderInput | SortOrder;
		isAvailable?: SortOrder;
		bookings?: FormBookingOrderByRelationAggregateInput;
	};

	export type TableWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			tableNumber?: number;
			AND?: TableWhereInput | TableWhereInput[];
			OR?: TableWhereInput[];
			NOT?: TableWhereInput | TableWhereInput[];
			capacity?: IntFilter<'Table'> | number;
			location?: StringNullableFilter<'Table'> | string | null;
			isAvailable?: BoolFilter<'Table'> | boolean;
			bookings?: FormBookingListRelationFilter;
		},
		'id' | 'tableNumber'
	>;

	export type TableOrderByWithAggregationInput = {
		id?: SortOrder;
		tableNumber?: SortOrder;
		capacity?: SortOrder;
		location?: SortOrderInput | SortOrder;
		isAvailable?: SortOrder;
		_count?: TableCountOrderByAggregateInput;
		_avg?: TableAvgOrderByAggregateInput;
		_max?: TableMaxOrderByAggregateInput;
		_min?: TableMinOrderByAggregateInput;
		_sum?: TableSumOrderByAggregateInput;
	};

	export type TableScalarWhereWithAggregatesInput = {
		AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[];
		OR?: TableScalarWhereWithAggregatesInput[];
		NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'Table'> | string;
		tableNumber?: IntWithAggregatesFilter<'Table'> | number;
		capacity?: IntWithAggregatesFilter<'Table'> | number;
		location?: StringNullableWithAggregatesFilter<'Table'> | string | null;
		isAvailable?: BoolWithAggregatesFilter<'Table'> | boolean;
	};

	export type FormBookingCreateInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutBookingsInput;
		table?: TableCreateNestedOneWithoutBookingsInput;
	};

	export type FormBookingUncheckedCreateInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId?: string | null;
		tableId?: string | null;
	};

	export type FormBookingUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutBookingsNestedInput;
		table?: TableUpdateOneWithoutBookingsNestedInput;
	};

	export type FormBookingUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: NullableStringFieldUpdateOperationsInput | string | null;
		tableId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type FormBookingCreateManyInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId?: string | null;
		tableId?: string | null;
	};

	export type FormBookingUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type FormBookingUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: NullableStringFieldUpdateOperationsInput | string | null;
		tableId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type UserCreateInput = {
		id?: string;
		email: string;
		password: string;
		name: string;
		role?: $Enums.UserRole;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		bookings?: FormBookingCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateInput = {
		id?: string;
		email: string;
		password: string;
		name: string;
		role?: $Enums.UserRole;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		bookings?: FormBookingUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		bookings?: FormBookingUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		bookings?: FormBookingUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateManyInput = {
		id?: string;
		email: string;
		password: string;
		name: string;
		role?: $Enums.UserRole;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TableCreateInput = {
		id?: string;
		tableNumber: number;
		capacity: number;
		location?: string | null;
		isAvailable?: boolean;
		bookings?: FormBookingCreateNestedManyWithoutTableInput;
	};

	export type TableUncheckedCreateInput = {
		id?: string;
		tableNumber: number;
		capacity: number;
		location?: string | null;
		isAvailable?: boolean;
		bookings?: FormBookingUncheckedCreateNestedManyWithoutTableInput;
	};

	export type TableUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
		bookings?: FormBookingUpdateManyWithoutTableNestedInput;
	};

	export type TableUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
		bookings?: FormBookingUncheckedUpdateManyWithoutTableNestedInput;
	};

	export type TableCreateManyInput = {
		id?: string;
		tableNumber: number;
		capacity: number;
		location?: string | null;
		isAvailable?: boolean;
	};

	export type TableUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
	};

	export type TableUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type EnumFormBookingStatusFilter<$PrismaModel = never> = {
		equals?: $Enums.FormBookingStatus | EnumFormBookingStatusFieldRefInput<$PrismaModel>;
		in?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		notIn?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		not?: NestedEnumFormBookingStatusFilter<$PrismaModel> | $Enums.FormBookingStatus;
	};

	export type UserNullableScalarRelationFilter = {
		is?: UserWhereInput | null;
		isNot?: UserWhereInput | null;
	};

	export type TableNullableScalarRelationFilter = {
		is?: TableWhereInput | null;
		isNot?: TableWhereInput | null;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type FormBookingCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		date?: SortOrder;
		time?: SortOrder;
		guestsCount?: SortOrder;
		phoneNumber?: SortOrder;
		notes?: SortOrder;
		status?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		tableId?: SortOrder;
	};

	export type FormBookingAvgOrderByAggregateInput = {
		guestsCount?: SortOrder;
	};

	export type FormBookingMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		date?: SortOrder;
		time?: SortOrder;
		guestsCount?: SortOrder;
		phoneNumber?: SortOrder;
		notes?: SortOrder;
		status?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		tableId?: SortOrder;
	};

	export type FormBookingMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		date?: SortOrder;
		time?: SortOrder;
		guestsCount?: SortOrder;
		phoneNumber?: SortOrder;
		notes?: SortOrder;
		status?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		tableId?: SortOrder;
	};

	export type FormBookingSumOrderByAggregateInput = {
		guestsCount?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type EnumFormBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.FormBookingStatus | EnumFormBookingStatusFieldRefInput<$PrismaModel>;
		in?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		notIn?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		not?: NestedEnumFormBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.FormBookingStatus;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumFormBookingStatusFilter<$PrismaModel>;
		_max?: NestedEnumFormBookingStatusFilter<$PrismaModel>;
	};

	export type EnumUserRoleFilter<$PrismaModel = never> = {
		equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
		in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
	};

	export type FormBookingListRelationFilter = {
		every?: FormBookingWhereInput;
		some?: FormBookingWhereInput;
		none?: FormBookingWhereInput;
	};

	export type FormBookingOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		name?: SortOrder;
		role?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		name?: SortOrder;
		role?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		name?: SortOrder;
		role?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
		in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumUserRoleFilter<$PrismaModel>;
		_max?: NestedEnumUserRoleFilter<$PrismaModel>;
	};

	export type BoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type TableCountOrderByAggregateInput = {
		id?: SortOrder;
		tableNumber?: SortOrder;
		capacity?: SortOrder;
		location?: SortOrder;
		isAvailable?: SortOrder;
	};

	export type TableAvgOrderByAggregateInput = {
		tableNumber?: SortOrder;
		capacity?: SortOrder;
	};

	export type TableMaxOrderByAggregateInput = {
		id?: SortOrder;
		tableNumber?: SortOrder;
		capacity?: SortOrder;
		location?: SortOrder;
		isAvailable?: SortOrder;
	};

	export type TableMinOrderByAggregateInput = {
		id?: SortOrder;
		tableNumber?: SortOrder;
		capacity?: SortOrder;
		location?: SortOrder;
		isAvailable?: SortOrder;
	};

	export type TableSumOrderByAggregateInput = {
		tableNumber?: SortOrder;
		capacity?: SortOrder;
	};

	export type BoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type UserCreateNestedOneWithoutBookingsInput = {
		create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>;
		connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;
		connect?: UserWhereUniqueInput;
	};

	export type TableCreateNestedOneWithoutBookingsInput = {
		create?: XOR<TableCreateWithoutBookingsInput, TableUncheckedCreateWithoutBookingsInput>;
		connectOrCreate?: TableCreateOrConnectWithoutBookingsInput;
		connect?: TableWhereUniqueInput;
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type EnumFormBookingStatusFieldUpdateOperationsInput = {
		set?: $Enums.FormBookingStatus;
	};

	export type UserUpdateOneWithoutBookingsNestedInput = {
		create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>;
		connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;
		upsert?: UserUpsertWithoutBookingsInput;
		disconnect?: UserWhereInput | boolean;
		delete?: UserWhereInput | boolean;
		connect?: UserWhereUniqueInput;
		update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>;
	};

	export type TableUpdateOneWithoutBookingsNestedInput = {
		create?: XOR<TableCreateWithoutBookingsInput, TableUncheckedCreateWithoutBookingsInput>;
		connectOrCreate?: TableCreateOrConnectWithoutBookingsInput;
		upsert?: TableUpsertWithoutBookingsInput;
		disconnect?: TableWhereInput | boolean;
		delete?: TableWhereInput | boolean;
		connect?: TableWhereUniqueInput;
		update?: XOR<XOR<TableUpdateToOneWithWhereWithoutBookingsInput, TableUpdateWithoutBookingsInput>, TableUncheckedUpdateWithoutBookingsInput>;
	};

	export type FormBookingCreateNestedManyWithoutUserInput = {
		create?: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput> | FormBookingCreateWithoutUserInput[] | FormBookingUncheckedCreateWithoutUserInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutUserInput | FormBookingCreateOrConnectWithoutUserInput[];
		createMany?: FormBookingCreateManyUserInputEnvelope;
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
	};

	export type FormBookingUncheckedCreateNestedManyWithoutUserInput = {
		create?: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput> | FormBookingCreateWithoutUserInput[] | FormBookingUncheckedCreateWithoutUserInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutUserInput | FormBookingCreateOrConnectWithoutUserInput[];
		createMany?: FormBookingCreateManyUserInputEnvelope;
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
	};

	export type EnumUserRoleFieldUpdateOperationsInput = {
		set?: $Enums.UserRole;
	};

	export type FormBookingUpdateManyWithoutUserNestedInput = {
		create?: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput> | FormBookingCreateWithoutUserInput[] | FormBookingUncheckedCreateWithoutUserInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutUserInput | FormBookingCreateOrConnectWithoutUserInput[];
		upsert?: FormBookingUpsertWithWhereUniqueWithoutUserInput | FormBookingUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: FormBookingCreateManyUserInputEnvelope;
		set?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		disconnect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		delete?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		update?: FormBookingUpdateWithWhereUniqueWithoutUserInput | FormBookingUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?: FormBookingUpdateManyWithWhereWithoutUserInput | FormBookingUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
	};

	export type FormBookingUncheckedUpdateManyWithoutUserNestedInput = {
		create?: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput> | FormBookingCreateWithoutUserInput[] | FormBookingUncheckedCreateWithoutUserInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutUserInput | FormBookingCreateOrConnectWithoutUserInput[];
		upsert?: FormBookingUpsertWithWhereUniqueWithoutUserInput | FormBookingUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: FormBookingCreateManyUserInputEnvelope;
		set?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		disconnect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		delete?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		update?: FormBookingUpdateWithWhereUniqueWithoutUserInput | FormBookingUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?: FormBookingUpdateManyWithWhereWithoutUserInput | FormBookingUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
	};

	export type FormBookingCreateNestedManyWithoutTableInput = {
		create?: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput> | FormBookingCreateWithoutTableInput[] | FormBookingUncheckedCreateWithoutTableInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutTableInput | FormBookingCreateOrConnectWithoutTableInput[];
		createMany?: FormBookingCreateManyTableInputEnvelope;
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
	};

	export type FormBookingUncheckedCreateNestedManyWithoutTableInput = {
		create?: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput> | FormBookingCreateWithoutTableInput[] | FormBookingUncheckedCreateWithoutTableInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutTableInput | FormBookingCreateOrConnectWithoutTableInput[];
		createMany?: FormBookingCreateManyTableInputEnvelope;
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
	};

	export type BoolFieldUpdateOperationsInput = {
		set?: boolean;
	};

	export type FormBookingUpdateManyWithoutTableNestedInput = {
		create?: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput> | FormBookingCreateWithoutTableInput[] | FormBookingUncheckedCreateWithoutTableInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutTableInput | FormBookingCreateOrConnectWithoutTableInput[];
		upsert?: FormBookingUpsertWithWhereUniqueWithoutTableInput | FormBookingUpsertWithWhereUniqueWithoutTableInput[];
		createMany?: FormBookingCreateManyTableInputEnvelope;
		set?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		disconnect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		delete?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		update?: FormBookingUpdateWithWhereUniqueWithoutTableInput | FormBookingUpdateWithWhereUniqueWithoutTableInput[];
		updateMany?: FormBookingUpdateManyWithWhereWithoutTableInput | FormBookingUpdateManyWithWhereWithoutTableInput[];
		deleteMany?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
	};

	export type FormBookingUncheckedUpdateManyWithoutTableNestedInput = {
		create?: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput> | FormBookingCreateWithoutTableInput[] | FormBookingUncheckedCreateWithoutTableInput[];
		connectOrCreate?: FormBookingCreateOrConnectWithoutTableInput | FormBookingCreateOrConnectWithoutTableInput[];
		upsert?: FormBookingUpsertWithWhereUniqueWithoutTableInput | FormBookingUpsertWithWhereUniqueWithoutTableInput[];
		createMany?: FormBookingCreateManyTableInputEnvelope;
		set?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		disconnect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		delete?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		connect?: FormBookingWhereUniqueInput | FormBookingWhereUniqueInput[];
		update?: FormBookingUpdateWithWhereUniqueWithoutTableInput | FormBookingUpdateWithWhereUniqueWithoutTableInput[];
		updateMany?: FormBookingUpdateManyWithWhereWithoutTableInput | FormBookingUpdateManyWithWhereWithoutTableInput[];
		deleteMany?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedEnumFormBookingStatusFilter<$PrismaModel = never> = {
		equals?: $Enums.FormBookingStatus | EnumFormBookingStatusFieldRefInput<$PrismaModel>;
		in?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		notIn?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		not?: NestedEnumFormBookingStatusFilter<$PrismaModel> | $Enums.FormBookingStatus;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedEnumFormBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.FormBookingStatus | EnumFormBookingStatusFieldRefInput<$PrismaModel>;
		in?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		notIn?: $Enums.FormBookingStatus[] | ListEnumFormBookingStatusFieldRefInput<$PrismaModel>;
		not?: NestedEnumFormBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.FormBookingStatus;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumFormBookingStatusFilter<$PrismaModel>;
		_max?: NestedEnumFormBookingStatusFilter<$PrismaModel>;
	};

	export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
		equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
		in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
	};

	export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
		in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
		not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumUserRoleFilter<$PrismaModel>;
		_max?: NestedEnumUserRoleFilter<$PrismaModel>;
	};

	export type NestedBoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type UserCreateWithoutBookingsInput = {
		id?: string;
		email: string;
		password: string;
		name: string;
		role?: $Enums.UserRole;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUncheckedCreateWithoutBookingsInput = {
		id?: string;
		email: string;
		password: string;
		name: string;
		role?: $Enums.UserRole;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserCreateOrConnectWithoutBookingsInput = {
		where: UserWhereUniqueInput;
		create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>;
	};

	export type TableCreateWithoutBookingsInput = {
		id?: string;
		tableNumber: number;
		capacity: number;
		location?: string | null;
		isAvailable?: boolean;
	};

	export type TableUncheckedCreateWithoutBookingsInput = {
		id?: string;
		tableNumber: number;
		capacity: number;
		location?: string | null;
		isAvailable?: boolean;
	};

	export type TableCreateOrConnectWithoutBookingsInput = {
		where: TableWhereUniqueInput;
		create: XOR<TableCreateWithoutBookingsInput, TableUncheckedCreateWithoutBookingsInput>;
	};

	export type UserUpsertWithoutBookingsInput = {
		update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>;
		create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutBookingsInput = {
		where?: UserWhereInput;
		data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>;
	};

	export type UserUpdateWithoutBookingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateWithoutBookingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TableUpsertWithoutBookingsInput = {
		update: XOR<TableUpdateWithoutBookingsInput, TableUncheckedUpdateWithoutBookingsInput>;
		create: XOR<TableCreateWithoutBookingsInput, TableUncheckedCreateWithoutBookingsInput>;
		where?: TableWhereInput;
	};

	export type TableUpdateToOneWithWhereWithoutBookingsInput = {
		where?: TableWhereInput;
		data: XOR<TableUpdateWithoutBookingsInput, TableUncheckedUpdateWithoutBookingsInput>;
	};

	export type TableUpdateWithoutBookingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
	};

	export type TableUncheckedUpdateWithoutBookingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		tableNumber?: IntFieldUpdateOperationsInput | number;
		capacity?: IntFieldUpdateOperationsInput | number;
		location?: NullableStringFieldUpdateOperationsInput | string | null;
		isAvailable?: BoolFieldUpdateOperationsInput | boolean;
	};

	export type FormBookingCreateWithoutUserInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		table?: TableCreateNestedOneWithoutBookingsInput;
	};

	export type FormBookingUncheckedCreateWithoutUserInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		tableId?: string | null;
	};

	export type FormBookingCreateOrConnectWithoutUserInput = {
		where: FormBookingWhereUniqueInput;
		create: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput>;
	};

	export type FormBookingCreateManyUserInputEnvelope = {
		data: FormBookingCreateManyUserInput | FormBookingCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type FormBookingUpsertWithWhereUniqueWithoutUserInput = {
		where: FormBookingWhereUniqueInput;
		update: XOR<FormBookingUpdateWithoutUserInput, FormBookingUncheckedUpdateWithoutUserInput>;
		create: XOR<FormBookingCreateWithoutUserInput, FormBookingUncheckedCreateWithoutUserInput>;
	};

	export type FormBookingUpdateWithWhereUniqueWithoutUserInput = {
		where: FormBookingWhereUniqueInput;
		data: XOR<FormBookingUpdateWithoutUserInput, FormBookingUncheckedUpdateWithoutUserInput>;
	};

	export type FormBookingUpdateManyWithWhereWithoutUserInput = {
		where: FormBookingScalarWhereInput;
		data: XOR<FormBookingUpdateManyMutationInput, FormBookingUncheckedUpdateManyWithoutUserInput>;
	};

	export type FormBookingScalarWhereInput = {
		AND?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
		OR?: FormBookingScalarWhereInput[];
		NOT?: FormBookingScalarWhereInput | FormBookingScalarWhereInput[];
		id?: StringFilter<'FormBooking'> | string;
		name?: StringFilter<'FormBooking'> | string;
		date?: DateTimeFilter<'FormBooking'> | Date | string;
		time?: StringFilter<'FormBooking'> | string;
		guestsCount?: IntFilter<'FormBooking'> | number;
		phoneNumber?: StringFilter<'FormBooking'> | string;
		notes?: StringNullableFilter<'FormBooking'> | string | null;
		status?: EnumFormBookingStatusFilter<'FormBooking'> | $Enums.FormBookingStatus;
		createdAt?: DateTimeFilter<'FormBooking'> | Date | string;
		updatedAt?: DateTimeFilter<'FormBooking'> | Date | string;
		userId?: StringNullableFilter<'FormBooking'> | string | null;
		tableId?: StringNullableFilter<'FormBooking'> | string | null;
	};

	export type FormBookingCreateWithoutTableInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutBookingsInput;
	};

	export type FormBookingUncheckedCreateWithoutTableInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId?: string | null;
	};

	export type FormBookingCreateOrConnectWithoutTableInput = {
		where: FormBookingWhereUniqueInput;
		create: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput>;
	};

	export type FormBookingCreateManyTableInputEnvelope = {
		data: FormBookingCreateManyTableInput | FormBookingCreateManyTableInput[];
		skipDuplicates?: boolean;
	};

	export type FormBookingUpsertWithWhereUniqueWithoutTableInput = {
		where: FormBookingWhereUniqueInput;
		update: XOR<FormBookingUpdateWithoutTableInput, FormBookingUncheckedUpdateWithoutTableInput>;
		create: XOR<FormBookingCreateWithoutTableInput, FormBookingUncheckedCreateWithoutTableInput>;
	};

	export type FormBookingUpdateWithWhereUniqueWithoutTableInput = {
		where: FormBookingWhereUniqueInput;
		data: XOR<FormBookingUpdateWithoutTableInput, FormBookingUncheckedUpdateWithoutTableInput>;
	};

	export type FormBookingUpdateManyWithWhereWithoutTableInput = {
		where: FormBookingScalarWhereInput;
		data: XOR<FormBookingUpdateManyMutationInput, FormBookingUncheckedUpdateManyWithoutTableInput>;
	};

	export type FormBookingCreateManyUserInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		tableId?: string | null;
	};

	export type FormBookingUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		table?: TableUpdateOneWithoutBookingsNestedInput;
	};

	export type FormBookingUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		tableId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type FormBookingUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		tableId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type FormBookingCreateManyTableInput = {
		id?: string;
		name: string;
		date: Date | string;
		time: string;
		guestsCount?: number;
		phoneNumber: string;
		notes?: string | null;
		status?: $Enums.FormBookingStatus;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId?: string | null;
	};

	export type FormBookingUpdateWithoutTableInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutBookingsNestedInput;
	};

	export type FormBookingUncheckedUpdateWithoutTableInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type FormBookingUncheckedUpdateManyWithoutTableInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		date?: DateTimeFieldUpdateOperationsInput | Date | string;
		time?: StringFieldUpdateOperationsInput | string;
		guestsCount?: IntFieldUpdateOperationsInput | number;
		phoneNumber?: StringFieldUpdateOperationsInput | string;
		notes?: NullableStringFieldUpdateOperationsInput | string | null;
		status?: EnumFormBookingStatusFieldUpdateOperationsInput | $Enums.FormBookingStatus;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
