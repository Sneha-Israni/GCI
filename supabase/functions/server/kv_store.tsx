// This file is disabled - app uses client-side storage only
// No Supabase KV store is needed

export const set = async (key: string, value: any): Promise<void> => {
  throw new Error("KV store is disabled");
};

export const get = async (key: string): Promise<any> => {
  throw new Error("KV store is disabled");
};
