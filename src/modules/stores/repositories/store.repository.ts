import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const addStore = async (data: any): Promise<number> => {
  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query<ResultSetHeader>(
      `INSERT INTO store (name, city, district, neighborhood, detail)
       VALUES (?, ?, ?, ?, ?)`,
      [
        data.name,
        data.city,
        data.district,
        data.neighborhood,
        data.detail
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`가게 생성 오류: ${err}`);
  } finally {
    conn.release();
  }
};


export const getStoreById = async (storeId: number): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<RowDataPacket[]>(
      `SELECT * FROM store WHERE id = ?`,
      [storeId]
    );

    if (rows.length === 0) return null;

    return rows[0];
  } catch (err) {
    throw new Error(`가게 조회 오류: ${err}`);
  } finally {
    conn.release();
  }
};