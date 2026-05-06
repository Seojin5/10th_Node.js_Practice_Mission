import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

interface ExistRow extends RowDataPacket {
  exist: number;
}

export const addUserMission = async (
  userId: number,
  missionId: number
): Promise<number> => {
  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query<ResultSetHeader>(
      `INSERT INTO user_mission (user_id, mission_id, status)
       VALUES (?, ?, 'ONGOING')`,
      [userId, missionId]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`유저 미션 생성 오류: ${err}`);
  } finally {
    conn.release();
  }
};

export const checkUserMission = async (
  userId: number,
  missionId: number
): Promise<boolean> => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<ExistRow[]>(
      `SELECT EXISTS(
        SELECT 1 FROM user_mission 
        WHERE user_id = ? AND mission_id = ?
      ) as exist`,
      [userId, missionId]
    );

    return !!rows[0]?.exist;

  } catch (err) {
    throw new Error(`중복 체크 오류: ${err}`);
  } finally {
    conn.release();
  }
};