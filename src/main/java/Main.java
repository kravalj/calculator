import java.util.Scanner;

public class Main {

        public static void main(String[] args){

            final byte months_in_the_year = 12;
            final byte percent = 100;

            int vyseUveru = 0;
            int pocetSplatek = 0;
            float mesicniSazba = 0;

            Scanner scanner = new Scanner(System.in);

            while (true) {
                System.out.print("Vyse uveru: ");
                vyseUveru = scanner.nextInt();
                if (vyseUveru >= 5000 && vyseUveru <= 700_000)
                    break;
                System.out.println("Zapiste cislici od 5000 do 700000");
            }

            while (true) {
                System.out.print("Rocni urokova sazba: ");
                float sazba = scanner.nextFloat();
                if (sazba >= 3.7 && sazba <= 40) {
                    mesicniSazba = sazba / percent / months_in_the_year;
                    break;
                }
                System.out.println("Zapiste sazbu od 3.8 do 40");
            }

            while (true) {
                System.out.print("Pocet splatek: ");
                pocetSplatek = scanner.nextInt();
                if (pocetSplatek >= 3 && pocetSplatek <= 120)
                    break;
                System.out.println("Zapiste cislici od 3 do 120");
            }


            double mesicniSplatka = vyseUveru
                    * (mesicniSazba * Math.pow(1 + mesicniSazba, pocetSplatek))
                    / (Math.pow(1 + mesicniSazba, pocetSplatek) - 1);

            System.out.println("com.Aplikace.Splatka: " + Math.round(mesicniSplatka));

            double celkovaCastka = pocetSplatek * mesicniSplatka;
            double preplacenaCastka = celkovaCastka - vyseUveru;

            System.out.println("preplacena castka: " + Math.round(preplacenaCastka));
            System.out.println("celkova castka splatna spotrebitelem: " + Math.round(celkovaCastka));

        }

    }
