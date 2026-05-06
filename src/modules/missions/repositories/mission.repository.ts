import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const addMission = async (data: any): Promise<number> => {
  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query<ResultSetHeader>(
      `INSERT INTO mission (store_id, title, reward)
       VALUES (?, ?, ?)`,
      [
        data.storeId,
        data.title,
        data.reward
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`미션 생성 오류: ${err}`);
  } finally {
    conn.release();
  }
};

export const getMissionById = async (missionId: number): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<RowDataPacket[]>(
      `SELECT * FROM mission WHERE id = ?`,
      [missionId]
    );

    if (rows.length === 0) return null;

    return rows[0];
  } catch (err) {
    throw new Error(`미션 조회 오류: ${err}`);
  } finally {
    conn.release();
  }
};