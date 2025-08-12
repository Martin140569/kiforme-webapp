import MetaApi from 'metaapi.cloud-sdk';

export default async function handler(req, res) {
    try {
        const TOKEN = "DEIN_METAAPI_TOKEN";
        const ACCOUNT_ID = "DEINE_ACCOUNT_ID";

        const api = new MetaApi(TOKEN);
        const account = await api.metatraderAccountApi.getAccount(ACCOUNT_ID);
        await account.deploy();
        await account.waitConnected();

        const connection = account.getRPCConnection();
        await connection.connect();

        const accountInfo = await connection.getAccountInformation();
        const positions = await connection.getPositions();

        res.status(200).json({
            balance: accountInfo.balance,
            equity: accountInfo.equity,
            positions
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
