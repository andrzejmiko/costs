import 'dotenv/config';
import * as passport from "passport";
import * as cors from "cors";
import * as express from "express";
import * as userRouter from './routes/user'
import * as budgetRouter from './routes/budget'
import "./authStrategy/local";
import "./authStrategy/jwt";


const app = express();
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(userRouter);
app.use(budgetRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
})