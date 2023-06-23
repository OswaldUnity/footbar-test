import {NextResponse} from "next/server";
import {InsertDB} from "../../../../../util/firebase.util";

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const code = searchParams.get('code');
  
  await InsertDB(code ?? 'NaN');

  return NextResponse.json({
    msg: 'done'
  });
}