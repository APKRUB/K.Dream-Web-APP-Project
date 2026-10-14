// ฟังก์ชันบันทึกกิจกรรมลง audit_logs โดยอัตโนมัติ
async function logAuditEvent(actionType, moduleName, description) {
    try {
        const userName = localStorage.getItem('account_name') || localStorage.getItem('admin_username') || localStorage.getItem('user_name') || 'ผู้ดูแลระบบ';
        await mySupabase.from('audit_logs').insert([{
            action_type: actionType, // 'CREATE' | 'UPDATE' | 'DELETE' | 'UPLOAD' | 'VIEW'
            module: moduleName,      // 'ข้อสอบ' | 'OMR' | 'ประกาศ' | 'Consult' | 'ระบบ'
            description: description,
            user_name: userName
        }]);
    } catch (err) {
        console.error('Audit Log Error:', err);
    }
}
