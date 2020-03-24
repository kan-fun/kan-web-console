import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
    'POST /api/view-key': (req: Request, res: Response) => {
        res.json(
            {
                AccessKey: 'ak123',
                SecretKey: 'sk456',
            })
    },
};
