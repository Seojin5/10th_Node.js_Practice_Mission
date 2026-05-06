import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const addReview = async (data: any): Promise<number> => {
  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query<ResultSetHeader>(
      `INSERT INTO review (user_id, store_id, user_mission_id, rating, content)
       VALUES (?, ?, ?, ?, ?)`,
      [
        data.userId,
        data.storeId,
        data.userMissionId,
        data.rating,
        data.content
      ]
    );

    return result.insertId;
  } finally {
    conn.release();
  }
};


export const checkReview = async (
  userId: number,
  userMissionId: number
): Promise<boolean> => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<RowDataPacket[]>(
      `SELECT EXISTS(
        SELECT 1 FROM review 
        WHERE user_id = ? AND user_mission_id = ?
      ) as exist`,
      [userId, userMissionId]
    );

    return !!rows[0]?.exist;
  } finally {
    conn.release();
  }
};