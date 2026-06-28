// Initialisation de Supabase
const supabaseUrl = 'https://wbihrbyxaglselpwkciu.supabase.co';
const supabaseKey = 'sb_publishable_ZqA_1Tpy3xMYakAQEcnmng_FfX4Idvq';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Exemple de test : Récupérer des produits ou des données
async function testerConnexion() {
    const { data, error } = await supabase
        .from('produits') // Le nom de votre table sur Supabase
        .select('*');
    
    if (error) {
        console.error('Erreur de connexion Supabase :', error.message);
    } else {
        console.log('Données reçues de Supabase :', data);
    }
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', testerConnexion);