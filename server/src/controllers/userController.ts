import {Request, Response} from 'express';

import pool from '../routes/database'

class UserController{
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM user', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await pool.query('SELECT * FROM user WHERE id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
   public async create (req: Request, res: Response) {
        await pool.query('INSERT INTO user set ?', [req.body]);
        res.json({text: 'usuario creado'});

    } 
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
       await pool.query('DELETE FROM user WHERE id = ?', [id] );
       res.json({message: 'Usuario eliminado'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE user set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'actualizando un usuario'});
    }
}
const userController = new UserController();

export default userController;